import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Home from '../views/Home.vue'
import AdminLogin from '../views/AdminLogin.vue'
import admincpanel from '../views/admincpanel.vue'
import editpage from '../views/editpage.vue'
import watch from '../views/watch.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminLogin
    },
    {
        path: '/controlpanel',
        name: 'admincpanel',
        component: admincpanel
    },
    {
        path: '/editpage',
        name: 'editpage',
        component: editpage
    },
    {
        path: '/watch',
        name: 'watch',
        component: watch
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router