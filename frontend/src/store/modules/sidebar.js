import {
    SET_SIDEBAR_ACTIVE
} from '../mutation-types'

export default {
    namespaced: true,
    state: {
        isActive: false
    },
    getters: {
        isActive: state => state.isActive,
    },
    actions: {
        setSidebarActive({ commit }, payload) {
            commit(SET_SIDEBAR_ACTIVE, payload);
        }
    },
    mutations: {
        [SET_SIDEBAR_ACTIVE](state, status) {
            state.isActive = status;
        }
    }
}