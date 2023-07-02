<script setup lang="ts">
import { useRoute } from 'vue-router';

import Sidebar from '@/components/Sidebar.vue';

const route = useRoute();
</script>

<template>
  <Sidebar v-if="!route.meta.hideSidebar" />
  <router-view />
</template>

<style scoped></style>
