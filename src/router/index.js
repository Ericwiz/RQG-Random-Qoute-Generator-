import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/currentQoute',
      name: 'CurrentAuthor',
      props: route => ({author: route.query.author}),
      component: () => import('../views/CurrentAuthorsView.vue')
    },
    {
      path: '/qoutes',
      name: 'Authors',
      props: route => ({author: route.query.author}),
      component: () => import('../views/CurrentAuthorsView.vue')
    }
  ]
})

export default router
