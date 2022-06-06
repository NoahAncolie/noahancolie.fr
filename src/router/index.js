import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CvView from '../views/CvView.vue'
import Test from '../views/Test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/curriculum-vitae',
      name: 'cv',
      component: CvView
    },
    {
      path: "/curriculum-vitae/test",
      name: "test",
      component: Test
    }
  ]
})

export default router
