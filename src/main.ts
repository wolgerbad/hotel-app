import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router"
import './main.css'
import App from './App.vue'
import Rooms from './pages/Rooms.vue'
import Layout from "./pages/Layout.vue"
import BoughtItems from './pages/BoughtItems.vue'
import {createPinia } from "pinia"


const routes = [
    { path: '/', component: Layout },
    { path: '/rooms', component: Rooms },
    {
      path: "/bought-rooms", component: BoughtItems
    }
  ]

const router = createRouter({
    history:createWebHistory(),
    routes,
})


const app = createApp(App)
app.use(router);
app.use(createPinia());
app.mount('#app')