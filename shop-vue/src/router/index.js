import { createRouter, createWebHistory } from "vue-router";

import NotFound from '@/pages/error/404.vue'
import Home from '@/pages/index.vue'

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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;