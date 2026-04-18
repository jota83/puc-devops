import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Sobre from '../views/Sobre.vue'
import Contato from '../views/Contato.vue'
import Login from '../views/Login.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/sobre', component: Sobre },
    { path: '/contato', component: Contato },
    { path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
