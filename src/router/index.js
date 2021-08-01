import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '@/views/pages/Home'
import NotFound from '@/views/pages/404'
import NotifyPage from '@/views/pages/NotifyPage'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/notify-page',
    name: 'notify-page',
    component: NotifyPage
  },
  {
    path: '/*',
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
