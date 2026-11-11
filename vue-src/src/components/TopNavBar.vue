<!--
  Copyright 2026 Mushu
  Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
-->
<script setup lang="ts">
import { ref } from 'vue'

const keyword = ref('')

function onSearch() {
  const kw = keyword.value.trim()
  if (!kw) return
  // 走 WordPress 标准搜索结果页
  window.location.assign('/?s=' + encodeURIComponent(kw))
}

/*function onLogin() {
  window.location.assign('/wp-login.php')
}*/
</script>

<template>
  <nav class="top-navbar">
    <div id = "top-navbar-logo">
      <svg viewBox="0 0 320 80" width="100" height="40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-blue-purple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#4f86f7" />
            <stop offset="100%" stop-color="#6f84d5" />
          </linearGradient>
        </defs>
        <text x="0" y="60" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="bold" fill="url(#grad-blue-purple)">
          无想札记
        </text>
      </svg>
    </div>
    <div id="top-navbar-nav">
      <RouterLink to="/" class="top-navbar-nav-link">首页</RouterLink>
      <RouterLink to="/blog" class="top-navbar-nav-link">文章</RouterLink>
      <RouterLink to="/Talk" class="top-navbar-nav-link">说说</RouterLink>
      <RouterLink to="/ToDoList" class="top-navbar-nav-link">待办</RouterLink>
      <RouterLink to="/Tools" class="top-navbar-nav-link">工作台</RouterLink>
    </div>
    <div id="top-navbar-search">
      <form class="site-nav__search" @submit.prevent="onSearch" role="search">
        <input
            v-model="keyword"
            type="search"
            class="site-nav__search-input"
            aria-label="搜索"
        />
        <button type="submit" class="site-nav__search-btn" aria-label="搜索">
          <svg
              class="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
        </button>
      </form>
    </div>
<!--    <button type="button" class="site-nav__login" id="top-navbar-login" @click="onLogin">登录</button>-->
  </nav>
</template>

<style scoped>
.top-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 16px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.1);
}

#top-navbar-logo {
  display: flex;
  align-items: center;
  margin-right: 16px;
  margin-left: 64px;
}

#top-navbar-logo svg {
  width: 100px;
  height: 40px;
}

#top-navbar-nav{
  display: flex;
  align-items: center;
}

.top-navbar-nav-link {
  margin: 0 16px;
  text-decoration: none;
  color: #333;
}

/* ===== 搜索：常态隐形，仅保留占位宽度；悬停/聚焦时才浮现容器 ===== */
.site-nav__search {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: 220px;                          /* 固定容器宽度 → 布局不会推动兄弟元素 */
  padding: 4px 6px 4px 12px;
  border: 1px solid transparent;         /* 默认隐形但占位，避免聚焦时发生跳位 */
  border-radius: 6px;
  background: transparent;
  transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
}

.site-nav__search:hover {
  background-color: rgba(0, 0, 0, 0.02); /* 悬停时轻微提示可点 */
}

.site-nav__search:focus-within {
  background-color: #fff;
  border-color: #4f86f7;
  box-shadow: 0 0 0 3px rgba(79, 134, 247, 0.12);
}

.site-nav__search-input {
  flex: 1;
  min-width: 0;
  height: 24px;
  padding: 0;
  border: none;
  outline: none;
  background: transparent;
  font-size: 0.9rem;
  color: #333;
}

/* 去掉原生 search 的清除按钮，保持极简 */
.site-nav__search-input::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}

.site-nav__search-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #909399;
  transition: color 0.2s;
}

.site-nav__search-btn:hover {
  color: #4f86f7;
}

.search-icon {
  width: 20px;
  height: 20px;
  display: block;
}
</style>