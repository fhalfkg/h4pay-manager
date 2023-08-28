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
		path: '/notice',
		component: Notice
	},
	{
		path: '/order',
		component: Order
	},
	{
		path: '/gift',
		component: Gift
	},
	{
		path: '/bulk/send-gift-paid',
		component: SendGiftPaid
	},
	{
		path: '/bulk/send-gift-unpaid',
		component: SendGiftUnpaid
	},
	{
		path: '/bulk/accept-gift-request',
		component: AcceptGiftRequest
	},
	{
		path: '/voucher',
		component: Voucher
	},
	{
		path: '/bulk/send-voucher-paid',
		component: SendVoucherPaid
	},
	{
		path: '/bulk/send-voucher-unpaid',
		component: SendVoucherUnpaid
	},
	{
		path: '/bulk/accept-voucher-request',
		component: AcceptVoucherRequest
	},
	{
		path: '/product',
		component: Product
	},
	{
		path: '/school',
		component: School
	},
	{
		path: '/admin',
		component: Admin
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
