<!--
  Copyright 2026 Mushu
  Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
-->
<script setup lang="ts">

</script>

<template>
  <router-link to="/">
  <div class="avatar" id="avatar-box">
    <div class="avatar-img">
    <img src="https://www.mushus.cn/wp-content/uploads/2026/11/Avatar.jpg" alt="Avatar">
    </div>
    <div class="avatar-info">
      <div class="avatar-name">
        <svg viewBox="0 0 230 80" width="100" height="40" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad-blue-purple" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#4f86f7" />
              <stop offset="100%" stop-color="#6f84d5" />
            </linearGradient>
          </defs>
          <text x="0" y="60" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="bold" fill="url(#grad-blue-purple)">
            Mushu
          </text>
        </svg>
      </div>
    </div>
  </div>
  </router-link>
</template>

<style scoped>
  #avatar-box {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 10px 32px 10px 10px;
    background: #ffffff;
    border: 1px solid #ebeef5;
    border-radius: 999px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .avatar-img {
    width: 56px;
    height: 56px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
  }

  .avatar-img img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .avatar-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .avatar-name {
    line-height: 0;
  }
</style>