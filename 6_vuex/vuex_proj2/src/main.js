import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { store } from './store.js'

createApp(App).use(store).mount('#app')