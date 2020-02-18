import Vue from 'vue';
import Vuex from 'vuex';
import store from './modules/store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    store
  },
  strict: debug
});
