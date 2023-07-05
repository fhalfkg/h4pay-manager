<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import logo from '@/assets/h4pay_logo.png'

import Toast from './Toast.vue'

const router = useRouter()
const selected = ref(false)
const isToastRevealed = ref(false)

function click() {
  selected.value = !selected.value
}
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
    <div class="menu-item" @click="router.replace('/dashboard')">
      menu 1
    </div>
    <div
      class="menu-item"
      @click="router.replace('/list')"
      :style="selected ? 'background-color: rgba(2,32,71,0.05)' : null"
    >menu 2</div>
    <div class="menu-item" @click="router.replace('/bulk')">menu 3</div>
  </aside>
	<Toast>이게 토스트</Toast>
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
	background-color: #f2f4f6;
	border-right: 1px solid rgb(209, 214, 219);
  justify-content: flex-start;
  align-items: center;
  width: 260px;
  height: 100%;
  min-height: 100%;
  /* padding: 40px 0px; */
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
  padding: 12px 16px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 8px;
  cursor: pointer;
	transition: background-color .2s ease;
}

.menu-item:hover {
  background-color: rgba(2,32,71,0.05);
}
</style>
