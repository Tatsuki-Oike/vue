import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Video from './components/Video.vue'
import About from './components/About.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/video',
            name: 'video',
            component: Video,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        }
    ]
})