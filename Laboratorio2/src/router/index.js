import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/components/MainComponent.vue'
import FormComponent from '../components/FormComponent.vue'
import ServicesComponent from '../components/ServicesComponent.vue'
import AboutUsComponent from '../components/AboutUsComponent.vue'

const routes = [
    { path: '/inicio', component: MainComponent }, //enlace al componente MainComponent
    { path: '/servicios', component: ServicesComponent }, //enlace al componente ServicesComponent
    { path: '/formulario', component: FormComponent },  //enlace al componente FormComponent
    { path: '/sobre_nosotros', component: AboutUsComponent } //enlace al componente AboutUsComponent
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
