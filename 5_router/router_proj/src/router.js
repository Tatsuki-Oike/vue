import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Page from './components/Page.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: HelloWorld,
        },
        {
            path: '/page',
            name: 'page',
            component: Page,
        }
    ]
})