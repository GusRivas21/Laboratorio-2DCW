import { createRouter, createWebHistory } from 'vue-router'
import FormComponent from '../components/FormComponent.vue'

const routes = [
    //{ path: '/servicios', component: ServicesComponent }, //enlace al componente ServicesComponent
    { path: '/formulario', component: FormComponent },  //enlace al componente FormComponent
    //{ path: '/sobre_nosotros', component: AboutUsComponent } //enlace al componente AboutUsComponent
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
