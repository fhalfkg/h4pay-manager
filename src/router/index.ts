import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Dashboard from '@/views/Dashboard.vue'
import Notice from '@/views/Notice.vue'
import Order from '@/views/Order.vue'
import Gift from '@/views/Gift.vue'
import SendGiftPaid from '@/views/bulk/SendGiftPaid.vue'
import SendGiftUnpaid from '@/views/bulk/SendGiftUnpaid.vue'
import AcceptGiftRequest from '@/views/bulk/AcceptGiftRequest.vue'
import Voucher from '@/views/Voucher.vue'
import SendVoucherPaid from '@/views/bulk/SendVoucherPaid.vue'
import SendVoucherUnpaid from '@/views/bulk/SendVoucherUnpaid.vue'
import AcceptVoucherRequest from '@/views/bulk/AcceptVoucherRequest.vue'
import Product from '@/views/Product.vue'
import School from '@/views/School.vue'
import Admin from '@/views/Admin.vue'
import { useStore } from '@/store'

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
    component: Dashboard,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/notice',
    component: Notice,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/gift',
    component: Gift,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/bulk/send-gift-paid',
    component: SendGiftPaid,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/bulk/send-gift-unpaid',
    component: SendGiftUnpaid,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/bulk/accept-gift-request',
    component: AcceptGiftRequest,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/voucher',
    component: Voucher,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/bulk/send-voucher-paid',
    component: SendVoucherPaid,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/bulk/send-voucher-unpaid',
    component: SendVoucherUnpaid,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/bulk/accept-voucher-request',
    component: AcceptVoucherRequest,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/product',
    component: Product,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/school',
    component: School,
    meta: {
      isAuthRequired: true
    }
  },
  {
    path: '/admin',
    component: Admin,
    meta: {
      isAuthRequired: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(function (to, _, next) {
  const store = useStore()
  const isAuthRequired = to.matched.some(routeInfo => { return routeInfo.meta.isAuthRequired })

  if (isAuthRequired) {
    if (store.accessToken != null) {
      next()
    } else {
      alert('비정상적인 접근입니다.')
      next('/')
    }
  } else {
    if (to.path == '/' && store.accessToken != null) {
      next('/dashboard')
    } else {
      next()
    }
  }
})

export default router
