<!--博客文章列表-->
<!--从 Welcome.vue 移出，由 App.vue 统一引入-->
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
  <section class="blog-list">
    <h2 class="blog-list__heading">最新文章</h2>

    <p v-if="error" class="mx-state mx-state--error">{{ error }}</p>
    <p v-else-if="posts.length === 0" class="mx-state">还没有文章。</p>

    <ul v-else class="blog-list__items">
      <li v-for="p in posts" :key="p.id" class="blog-list__item mx-card">
        <RouterLink class="blog-list__link" :to="toInternalPath(p.link)">
          {{ p.title.rendered }}
        </RouterLink>
        <p class="blog-list__meta">{{ p.date.slice(0, 10) }}</p>
        <p
          class="blog-list__excerpt"
          v-html="p.excerpt.rendered"
        ></p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
</style>
