import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: require('./components/ExampleComponent.vue') }
]


const router = new VueRouter({
    routes
})