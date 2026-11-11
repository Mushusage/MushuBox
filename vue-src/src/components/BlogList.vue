<!--
  Copyright 2026 Mushu
  Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchPosts, toInternalPath, type WpPost } from '../api/wp'

const posts = ref<WpPost[]>([])
const error = ref('')

onMounted(async () => {
  try {
    posts.value = await fetchPosts(10)
  } catch (e) {
    error.value = e instanceof Error ? e.message : '文章加载失败'
  }
})
</script>

<template>
  <section class = "Blog-List">
    <div class = "Blog-List">
      <h2>最新文章</h2>
    </div>

    <div class = "Blog-List">
      <p v-if="error" class = "Blog-List">{{ error }}</p>
      <p v-else-if="posts.length === 0" class = "Blog-List-Empty">还没有文章。</p>
      <ul v-else class = "Blog-List">
        <li v-for="p in posts" :key="p.id">
          <RouterLink :to="toInternalPath(p.link)">
            {{ p.title.rendered }}
          </RouterLink>
          <p>{{ p.date.slice(0, 10) }}</p>
          <p
              v-html="p.excerpt.rendered"
          ></p>
        </li>
      </ul>
    </div>
  </section>

</template>

<style scoped>

</style>