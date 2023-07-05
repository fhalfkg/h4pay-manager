import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import List from '@/views/List.vue'
import Bulk from '@/views/Bulk.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      hideSidebar: true
    }
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
	{
		path: '/list',
		component: List
	},
	{
		path: '/bulk',
		component: Bulk
	}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
