<!--
  Copyright 2026 Mushu
  Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
-->
<script setup lang="ts">
import Welcome from "../components/Welcome.vue";
import Github from "../components/Github.vue";

</script>

<template>
  <div class="Home">
    <div class="Home-avatar">
      <img src="https://www.mushus.cn/wp-content/uploads/2026/11/Avatar.jpg" alt="Avatar">
      <h1 class="Home-name">Mushu</h1>
      <span class="Home-tag">思考 · 记录 · 分享</span>
    </div>
    <div class="Home-Welcome">
      <welcome />
    </div>
    <div class="Home-Contact">
      <RouterLink class="Home-btn" to="/blog">博客</RouterLink>
      <RouterLink class="Home-btn" to="/Talk">说说</RouterLink>
      <RouterLink class="Home-btn" to="/Tools">工作台</RouterLink>
      <RouterLink class="Home-btn" to="/About">关于</RouterLink>
      <Github class="Home-btn"/>

    </div>
  </div>
</template>

<style scoped>

.Home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
/*  min-height: calc(100vh - 0rem);*/
  animation: home-in 0.6s ease both;
  justify-content: flex-start;
  padding-top: 30vh;
  padding-bottom: 10rem;
}

@keyframes home-in {
  from {
    opacity: 0;
    transform: translateY(1.25rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.Home-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.Home-avatar img {
  width: 6.5rem;
  height: 6.5rem;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #fff;
  box-shadow: 0 0.5rem 1.5rem rgba(31, 45, 61, 0.18);
  transition: transform 0.3s ease;
}

.Home-avatar img:hover {
  transform: scale(1.06) rotate(2deg);
}

.Home-name {
  margin: 0.5rem 0 0;
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #1f2d3d;
}

.Home-tag {
  font-size: 0.85rem;
  color: #8a97a6;
  letter-spacing: 0.15em;
}

.Home-Welcome {
  text-align: center;
  color: #4a5b6d;
  line-height: 1.8;
}

.Home-Welcome :deep(h2) {
  font-size: 1.15rem;
  color: #1f2d3d;
  margin-bottom: 0.5rem;
}

.Home-Welcome :deep(p) {
  margin: 0;
  font-size: 0.95rem;
}

.Home-Contact {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  flex-wrap: wrap;
  justify-content: center;
}

.Home-btn {
  padding: 0.55rem 1.6rem;
  border-radius: 2rem;
  font-size: 0.95rem;
  color: #35506b;
  background: #f0f4f8;
  border: 1px solid transparent;
  text-decoration: none;
  transition: all 0.25s ease;
}

.Home-btn:hover {
  color: #fff;
  background: linear-gradient(135deg, #5e9ef7, #7c6cf5);
  box-shadow: 0 0.4rem 1rem rgba(110, 130, 245, 0.35);
  transform: translateY(-2px);
}

.Home-Contact :deep(a) {
  display: inline-flex;
  align-items: center;
  color: #8a97a6;
  transition: color 0.25s ease;
}

.Home-Contact :deep(a:hover) {
  color: #35506b;
}
</style>