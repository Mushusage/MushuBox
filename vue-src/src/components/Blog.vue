<!--
  Copyright 2026 Mushu
  Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
-->
<!--页面详情页-->
<!--WordPress 页面的固定链接是根下的单段 slug（如 /sample-page/），没有 ID，只能按 slug 查询-->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { fetchPageBySlug, type WpPost } from '../api/wp'

const route = useRoute()

const page = ref<WpPost | null>(null)
const loading = ref(false)
const error = ref('')

async function load(slug: string) {
  loading.value = true
  error.value = ''
  page.value = null

  try {
    const data = await fetchPageBySlug(slug)
    if (data) {
      page.value = data
    } else {
      // 查不到说明这个 slug 不是页面，交给 404 提示
      error.value = '页面不存在'
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : '页面加载失败'
  } finally {
    loading.value = false
  }
}

watch(
    () => route.params.slug as string,
    (slug) => {
      if (slug) load(slug)
    },
    { immediate: true },
)
</script>

<template>
  <div>
    <p v-if="loading" class="mx-state">加载中…</p>

    <p v-else-if="error" class="mx-state mx-state--error">{{ error }}</p>

    <article v-else-if="page">
      <h1 class="page__title" v-html="page.title.rendered"></h1>
      <div class="mx-content" v-html="page.content.rendered"></div>
    </article>
  </div>
</template>

<style scoped>
</style>
