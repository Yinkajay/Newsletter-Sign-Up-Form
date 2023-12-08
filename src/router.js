import { createRouter, createWebHistory } from "vue-router";
import HomePage from './pages/Home.vue'
import SuccessPage from './pages/SuccessPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/success', component: SuccessPage }
    ]
})

export default router