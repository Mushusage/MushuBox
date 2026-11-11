<!--
  Copyright 2026 Mushu
  Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
-->
<!-- 页脚组件 -->
<!-- 关于我 -->
<!-- 包含ICP备案号 公网安备案号 邮箱地址 Github地址 © 2026 无想的札记 -->

<script setup lang="ts">
import Github from './Github.vue'
import Email from './Email.vue'

</script>

<template>
  <div class="site-footer" id="site-footer">
    <div class="site-footer-nav" id="site-footer-FooterNav">
      <a class="site-footer-link" href="/about">关于我</a>
      <span>© 2026 无想的札记 </span>
      <div id="site-footer-Connect">
        <Github />
        <Email />
      </div>
    </div>
    <div class="site-footer-nav" id="site-footer-BeiAn">
      <p>
      <a id="site-footer-Icp" class="site-footer-link" href="http://beian.miit.gov.cn/" target="_blank">ICP备案号：鲁ICP备2024122948号-4</a>
        <span>    ·    </span>
        <a id="site-footer-Police" class="site-footer-link"
           href="https://beian.mps.gov.cn/#/query/webSearch?code=37162302000561"
           target="_blank" rel="noopener noreferrer">
          <img src="https://www.mushus.cn/wp-content/uploads/2026/11/logo01.6189a29f.png"
               alt="公安备案"
               class="site-footer-police-icon" />
          鲁公网安备37162302000561号
        </a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.site-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  font-size: 12px;
  color: #666;
  border-top: 1px solid rgba(128, 128, 128, 0.1);
}
.site-footer-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
}

.site-footer-link {
  color: #666;
  text-decoration: none;
}

.site-footer-link:hover {
  color: #333;
}

.site-footer-police-icon {
  width: 18px;
  height: 18px;
  vertical-align: -3px;
  margin-right: 4px;
}
</style>
