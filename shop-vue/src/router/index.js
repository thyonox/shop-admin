import { createRouter, createWebHistory } from "vue-router";

import NotFound from '@/pages/error/404.vue'
import Home from '@/pages/index.vue'
import Login from '@/pages/auth/login.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;