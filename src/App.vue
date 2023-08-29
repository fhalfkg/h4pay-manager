<script setup lang="ts">
import { useRoute } from 'vue-router'

import Sidebar from '@/components/Sidebar.vue'

const route = useRoute()
</script>

<template>
  <Sidebar v-if="!route.meta.hideSidebar" />
  <router-view />
</template>

<style>
@font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  font-weight: 100 700;
  src: url(https://fonts.gstatic.com/s/materialsymbolsoutlined/v122/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2) format('woff2');
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 20px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
	color: grey;
  user-select: none;
}

h1 {
  font-size: 2em;
}

.typography {
  margin: 0;
  padding: 0;
}
</style>
