import {
    SET_SELECTED_ITEM
} from '../mutation-types'

export default {
    namespaced: true,
    state: {
        selectedItem: {
            item: {},
            column: '',
        },
        selectedItemHistory: []
    },
    getters: {
        selectedItem: state => state.selectedItem,
        selectedItemHistory: state => state.selectedItemHistory
    },
    actions: {
        setSelectedItem({ commit }, payload) {
            commit(SET_SELECTED_ITEM, payload);
        }
    },
    mutations: {
        [SET_SELECTED_ITEM](state, item) {
            let oldItem = state.selectedItem;
            
            // Quick and dirty. There is no nested object(s) and/or array(s)
            if (JSON.stringify(oldItem) !== JSON.stringify(item)) {
                state.selectedItem = item;
                state.selectedItemHistory = [item, ...state.selectedItemHistory];
            } else {
                state.selectedItem = {
                    item: {},
                    column: '',
                };
            }
        }
    }
}