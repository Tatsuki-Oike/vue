import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Category from './components/Category.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: Home,
        },
        {
            path: '/todo/:category',
            name: 'todo',
            component: Category,
            props: true,
        }
    ]
})