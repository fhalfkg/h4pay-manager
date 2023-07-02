<script setup lang="ts">
import { ref } from 'vue';

import logo from '@/assets/h4pay_logo.png';

const selected = ref(false);

function click() {
  selected.value = !selected.value;
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
    <div class="menu-item">
      <span style="color: white">menu 1</span>
    </div>
    <div
      class="menu-item"
      @click="click"
      :style="selected ? 'background: green' : null"
    ></div>
    <div class="menu-item"></div>
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
  background: lightgrey;
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
  outline: none;
  border: none;
  margin: 0;
  overflow: visible;
  background: grey;
  padding: 12px 16px;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 8px;
  cursor: pointer;
}

.menu-item:hover {
  background: red;
}
</style>
