<script setup lang="ts">
import { useRouter } from 'vue-router'

import logo from '@/assets/h4pay_logo.png'

import ListCategory from './ListCategory.vue'

const router = useRouter()
const menu = [
  {
    name: "메인",
    children: [
      {
        name: "대시보드",
        path: "/dashboard",
        icon: "dashboard",
        role: "all",
        subChildren: []
      }
    ]
  },
  {
    name: "관리",
    children: [
      {
        name: "공지사항",
        path: "/notice",
        icon: "notifications",
        role: "all",
        subChildren: []
      },
      {
        name: "주문",
        path: "/order",
        icon: "shopping_cart",
        role: "all",
        subChildren: []
      },
      {
        name: "선물",
        path: "/gift",
        icon: "redeem",
        role: "all",
        subChildren: [
          {
            name: "대량 전송 (결제)",
            path: "/bulk/send-gift-paid",
            icon: "send",
            role: "all"
          },
          {
            name: "대량 전송 (무결제)",
            path: "/bulk/send-gift-unpaid",
            icon: "cancel_schedule_send",
            role: "all"
          },
          {
            name: "대량 전송 승인",
            path: "/bulk/accept-gift-request",
            icon: "check_circle",
            role: "all"
          }
        ]
      },
      {
        name: "금액권",
        path: "/voucher",
        icon: "credit_card",
        role: "all",
        subChildren: [
          {
            name: "대량 전송 (결제)",
            path: "/bulk/send-voucher-paid",
            icon: "send",
            role: "all"
          },
          {
            name: "대량 전송 (무결제)",
            path: "/bulk/send-voucher-unpaid",
            icon: "cancel_schedule_send",
            role: "all"
          },
          {
            name: "대량 전송 승인",
            path: "/bulk/accept-voucher-request",
            icon: "check_circle",
            role: "all"
          }
        ]
      },
      {
        name: "상품",
        path: "/product",
        icon: "category",
        role: "all",
        subChildren: []
      },
      {
        name: "관리자",
        path: "/admin",
        icon: "shield_person",
        role: "all",
        subChildren: []
      },
      {
        name: "학교",
        path: "/school",
        icon: "school",
        role: "admin",
        subChildren: []
      }
    ]
  }
]
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <img class="logo" :src="logo" />
      <div class="logo-typography">
        <div style="
            font-weight: bold;
            font-size: 2em;
            line-height: 1;
            margin-bottom: 5px;
          ">
          H4Pay
        </div>
        <div style="font-size: 1em; line-height: 1">매니저</div>
      </div>
    </div>
    <button class="signout-button" @click="router.replace('/')">
      <span class="material-symbols-outlined" style="color: white">logout</span>
      <span style="line-height: 1">로그아웃</span>
    </button>
    <ListCategory v-for="(category, i) in menu" :key="i">
      <template v-slot:name>
        {{ category.name }}
      </template>
      <template v-slot:item>
        <template v-for="children in category.children">
          <div class="menu-item" @click="router.replace(children.path)">
            <span class="material-symbols-outlined">
              {{ children.icon }}
            </span>
            <span class="menu-item-name">
              {{ children.name }}
            </span>
          </div>
          <div class="menu-subitem" v-for="subChildren in children.subChildren" @click="router.replace(subChildren.path)">
            <span class="material-symbols-outlined">
              {{ subChildren.icon }}
            </span>
            <span class="menu-item-name">
              {{ subChildren.name }}
            </span>
          </div>
        </template>
      </template>
    </ListCategory>
  </aside>
</template>

<style scoped>
.sidebar-header {
  display: flex;
  justify-content: center;
  margin: 50px 0px;
}

.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
  background: rgb(242, 244, 246);
  border-right: 1px solid rgb(209, 214, 219);
  justify-content: flex-start;
  align-items: center;
  width: 260px;
  height: 100%;
  min-height: 100%;
  overflow-y: auto;
  padding-bottom: 80px;
}

.logo {
  width: 80px;
  border-radius: var(--logo-border-radius);
}

.logo-typography {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
}

.menu-category {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  color: #4e5968;
  font-size: 13px;
  outline: none;
  border: none;
  margin: 0;
  overflow: visible;
  padding: 12px 16px;
  border-radius: 8px;
  transition: background-color .2s ease;
}

.menu-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  color: #4e5968;
  outline: none;
  border: none;
  margin: 0;
  overflow: visible;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color .2s ease;
}

.menu-subitem {
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  color: #4e5968;
  outline: none;
  border: none;
  margin: 0;
  overflow: visible;
  padding: 12px 48px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color .2s ease;
}

.menu-item:hover {
  background-color: rgba(2, 32, 71, 0.05);
}

.menu-subitem:hover {
  background-color: rgba(2, 32, 71, 0.05);
}

.menu-item-name {
  margin-left: 8px;
}
</style>
