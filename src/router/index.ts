import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Dashboard from '@/views/Dashboard.vue';

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      hideSidebar: true,
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
