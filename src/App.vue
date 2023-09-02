<script setup lang="ts">
import { useRoute } from 'vue-router'

import Sidebar from '@/components/Sidebar.vue'

const route = useRoute()
</script>

<template>
  <Sidebar class="sidebar" v-if="!route.meta.hideSidebar" />
  <router-view />
</template>

<style scoped>
.sidebar {
  z-index: 999;
}
</style>
