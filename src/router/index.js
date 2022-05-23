import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/signUp',
      name: 'signUp',
      component: ()=>import("../views/signUp.vue")
    },
    {
      path: '/account',
      name: 'Account',
      component: ()=>import("../views/Profile.vue")
    }
  ]
})

export default router
