import { createRouter, createWebHistory } from 'vue-router'
import Page1 from './components/Page1.vue'
import Page1Comp1 from './components/Page1Comp1.vue'
import Page1Comp2 from './components/Page1Comp2.vue'
import Page2 from './components/Page2.vue'
import Page2Comp1 from './components/Page2Comp1.vue'
import Page2Comp2 from './components/Page2Comp2.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Page1',
            components: {
                default: Page1,
                comp1: Page1Comp1,
                comp2: Page1Comp2,
            },
        },
        {
            path: '/page2',
            name: 'Page2',
            components: {
                default: Page2,
                comp1: Page2Comp1,
                comp2: Page2Comp2,
            },
        }
    ]
})