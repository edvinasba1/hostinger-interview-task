import { UserService } from '@/services';

import {
    CONCAT_ITEMS,
    SET_ITEMS,
    SET_COLUMN,
    SET_PAGE_NUMBER,
    SET_PAGINATION,
    SET_LOADING,
} from '../mutation-types';

function paginate(array, page_size, page_number) {
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

export default {
    namespaced: true,
    state: {
        isLoading: false,
        isPaginated: true,
        isAscending: true,
        columnName: "",
        pageNumber: 1,
        numberOfPages: 0,
        numberOfItems: 0,
        pageSize: 100,
        items: [],
        keys: [],
        selectedItem: {
            item: {},
            column: ''
        },
        selectedFieldsHistory: []
    },
    getters: {
        isLoading: state => state.isLoading,
        isAscending: state => state.isAscending,
        isPaginated: state => state.isPaginated,
        columnName: state => state.columnName,
        pageNumber: state => state.pageNumber,
        numberOfPages: state => state.numberOfPages,
        numberOfItems: state => state.numberOfItems,
        pageSize: state => state.pageSize,
        userKeys: state => {
            if (state.items.length > 0) {
                return Object.keys(state.items[0]).filter((_, i) => i > 0)
            } else {
                return []
            }
        },
        users: state => {
            let {
                items,
                pageSize,
                pageNumber,
                columnName,
                isPaginated,
                isAscending,
            } = state;

            let data = [...items];

            if (columnName) {
                data.sort((a, b) => {
                    if (a[columnName] > b[columnName]) {
                        return isAscending ? 1 : -1;
                    } else if (a[columnName] < b[columnName]) {
                        return isAscending ? -1 : 1;
                    }
                    return 0;
                });
            }

            if (isPaginated) {
                data = paginate(data, pageSize, pageNumber);
            }

            return data;
        },
    },
    actions: {
        async initData({ commit, state }) {
            let {
                pageNumber,
                pageSize
            } = state;

            commit(SET_LOADING, true);

            let skip = `?skip=${(pageNumber - 1) * pageSize}`;

            let limit = `&limit=${pageNumber * pageSize}&pageSize=${pageSize}`;

            let data = await UserService.get(`people${skip}${limit}`);

            commit(SET_ITEMS, data);

            commit(SET_LOADING, false);
        },
        setColumn({ commit }, payload) {
            commit(SET_COLUMN, payload);
        },
        async setPageNumber({ commit, state }, payload) {
            let {
                items,
                pageSize,
                pageNumber,
                numberOfItems
            } = state;

            let amountToSkip = items.length;

            let nextPage = pageNumber + 1;

            let limit;

            if (payload < nextPage) {
                if (payload * pageSize <= amountToSkip) {
                    limit = 0;
                } else {
                    limit = amountToSkip + pageSize;
                }
            } else {
                if (payload * pageSize <= amountToSkip) {
                    limit = 0;
                } else {
                    limit = payload * pageSize;
                }
            }

            let skip = amountToSkip;

            if (numberOfItems !== amountToSkip && limit !== 0) {

                skip = `?skip=${skip}`;

                limit = `&limit=${limit}`;

                let data = await UserService.get(`people${skip}${limit}`);

                commit(CONCAT_ITEMS, data);
            }

            commit(SET_PAGE_NUMBER, payload);
        },
        async lazyLoadItems({ commit, state }, payload) {
            let {
                skip,
                limit,
            } = payload;

            let {
                numberOfItems,
                items
            } = state;

            if (numberOfItems !== items.length) {
                commit(SET_LOADING, true);

                skip = `?skip=${skip}`;

                limit = `&limit=${limit}`;

                let data = await UserService.get(`people${skip}${limit}`);

                commit(CONCAT_ITEMS, data);

                commit(SET_LOADING, false);
            }
        },
        setPagination({ commit }, payload) {
            commit(SET_PAGINATION, payload);
        },
    },
    mutations: {
        [SET_ITEMS](state, data) {
            state.numberOfPages = data.pageCount;
            state.numberOfItems = data.itemCount;
            state.items = data.items;
        },
        [CONCAT_ITEMS](state, data) {
            state.items = [...state.items, ...data.items];
        },
        [SET_COLUMN](state, colName) {

            if (state.columnName === colName) {
                state.isAscending = !state.isAscending
            } else {
                state.isAscending = true
                state.columnName = colName;
            }
        },
        [SET_PAGE_NUMBER](state, number) {
            state.pageNumber = number;
        },
        [SET_PAGINATION](state, paginationStatus) {
            if (paginationStatus) {
                state.pageNumber = 1;
            }
            state.isPaginated = paginationStatus;
        },
        [SET_LOADING](state, status) {
            state.isLoading = status
        },
    }
}