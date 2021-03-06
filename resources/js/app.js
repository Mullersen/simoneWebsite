/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import ScrollAnimation from './scrollanimation.js'

Vue.directive('scrollanimation', ScrollAnimation);

Vue.use(VueRouter)

import App from './views/App.vue'
import Welcome from './views/Welcome.vue'


const router = new VueRouter({
    mode: "history",
    routes: [{
            path: '/home/home',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/home/subhome/:subject',
            name: 'subHome',
            props: true,
            component: () =>
                import ( /* webpackChunkName: "subhome" */ './views/SubHome.vue')
        },
        {
            path: '/home/search',
            name: 'search',
            component: () =>
                import ( /* webpackChunkName: "search" */ './views/Search.vue')
        },
        {
            path: '/home/article/:header',
            name: 'article',
            props: true,
            component: () =>
                import ( /* webpackChunkName: "article" */ './views/MyArticle.vue')
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
})


//window.Vue = require('vue');


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('admin', require('./components/Admin.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components: { App },
    router: router
})