import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store'

Vue.use(VueRouter);
Vue.config.devtools = true;

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import MainShell from "./layouts/MainShell.vue";
Vue.component("main-shell", MainShell);

import Default from "./layouts/Default.vue";
Vue.component("default-layout", Default);

import Dashboard from "./layouts/Dashboard.vue";
Vue.component("dashboard-layout", Dashboard);

import Index from "./views/Index";
Vue.component("index", Index);

import IndexTwo from "./views/IndexTwo";
Vue.component("index-two", IndexTwo);

import router from './routes/routes';

const app = new Vue({
    el: '#app',
    components: { MainShell },
    store,
    router
});
