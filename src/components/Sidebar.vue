<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import logo from '@/assets/h4pay_logo.png'
import menu from '@/assets/menu.json'

import ListCategory from './ListCategory.vue'

const router = useRouter()
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <img class="logo" :src="logo" />
      <div class="logo-typography">
        <div
          style="
            font-weight: bold;
            font-size: 2em;
            line-height: 1;
            margin-bottom: 5px;
          "
        >
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
				<div class="menu-item" v-for="(children, i) in category.children" :key="i" @click="router.replace(children.path)">
					<span class="material-symbols-outlined">
						{{ children.icon }}
					</span>
					<span class="menu-item-name">
						{{ children.name }}
					</span>
				</div>
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

.menu-item:hover {
  background-color: rgba(2,32,71,0.05);
}

.menu-item-name {
	margin-left: 8px;
}
</style>
