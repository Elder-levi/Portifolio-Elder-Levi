import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projetos from '../components/MAIN/Project/SectonProjects.vue'
import Servicos from '../components/MAIN/Serviços/Servicos.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projetos', name: 'Projetos', component: Projetos },
  { path: '/servicos', name: 'Servicos', component: Servicos }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
