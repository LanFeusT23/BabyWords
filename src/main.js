import Vue from 'vue';
import App from './App.vue';

import Vuex from 'vuex';
import VueRouter from 'vue-router';

import Editor from './components/Editor.vue';

import VueMaterial from 'vue-material';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueMaterial)

var store = new Vuex.Store({
    state: {

    },
    getters: {
        
    },
    actions: {
        
    },
    mutations: {
        
    }
});


var router = new VueRouter({
    routes: [
        { path: "/", component: Editor }
    ]
});


new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
});
