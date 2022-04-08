import { createRouter, createWebHistory } from "vue-router"
import Products from '@/components/Products.vue'
import Locations from '@/components/Locations.vue'
import Home from '@/components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'Products',
        component: Products
    },
    {
        path: '/locations',
        name: 'Locations',
        component: Locations
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router