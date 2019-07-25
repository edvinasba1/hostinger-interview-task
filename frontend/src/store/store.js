import Vue from 'vue';
import Vuex from 'vuex';

import modules from './modules';

import { dispatchActions } from '@/utils';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    modules,
});

let startsWith = 'init';

dispatchActions(store, modules, startsWith);

export default store;