import { createRouter, createWebHistory } from 'vue-router'
import FormComponent from '../components/FormComponent.vue'

const routes = [
    { path: '/formulario', component: FormComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
