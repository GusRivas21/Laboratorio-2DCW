import { createRouter, createWebHistory } from 'vue-router'
import FormComponent from '../components/FormComponent.vue'

const routes = [
    //{ path: '/servicios', component: ServicesComponent },
    { path: '/formulario', component: FormComponent },
    //{ path: '/sobre_nosotros', component: AboutUsComponent }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
