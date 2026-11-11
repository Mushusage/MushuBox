<!--
  Copyright 2026 Mushu
  Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
-->
<script setup lang="ts">
import { useRoute } from 'vue-router'
import SiteFooter from './components/SiteFooter.vue'
import TopNavBar from "./components/TopNavBar.vue";

const route = useRoute()
</script>

<template>
  <header class="app-header" v-if="route.path !== '/'">
    <TopNavBar />
  </header>

  <main class="app-main-Home" v-if="route.path === '/'">
    <RouterView/>
  </main>

  <main class="app-main" v-if="route.path !== '/'">
    <RouterView/>
  </main>

  <footer class="app-footer">
    <SiteFooter />
  </footer>
</template>

<style scoped>
.app-main{
  min-height: calc(100vh - 6rem);
}
.app-main-Home{
  min-height: 100vh;
}

</style>
