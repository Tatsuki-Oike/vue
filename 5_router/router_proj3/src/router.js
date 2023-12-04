import { createRouter, createWebHistory } from 'vue-router'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'page1/gest?id=0',
        },
        {
            path: '/page1/:username',
            name: 'page1',
            component: Page1,
            props: true
        },
        {
            path: '/page2/:username',
            name: 'page2',
            component: Page2,
            props: true
        }
    ]
})