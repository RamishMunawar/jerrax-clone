import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/components/../views/HomeView.vue';
import AboutView from '@/components/../views/AboutView.vue';
import Services from '@/components/Services.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
   
    },
    {
      path: '/services',
      name: 'Services' ,
    component: Services
   
    }
  ]
})

export default router
