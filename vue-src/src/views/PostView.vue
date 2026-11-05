<!--文章详情页-->
<!--对应固定链接 /blog/%post_id%/%postname%/ ，用 id 取数据，slug 仅用于展示-->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  fetchPost,
  fetchComments,
  buildCommentTree,
  type WpPost,
  type WpComment,
} from '../api/wp'

const route = useRoute()

const post = ref<WpPost | null>(null)
const comments = ref<Array<WpComment & { replies: WpComment[] }>>([])
const loading = ref(false)
const error = ref('')

/** 作者名来自 _embed，取不到时留空 */
const authorName = ref('')

async function load(id: number) {
  loading.value = true
  error.value = ''
  post.value = null
  comments.value = []
  authorName.value = ''

  try {
    const data = await fetchPost(id)
    post.value = data
    authorName.value = data._embedded?.author?.[0]?.name ?? ''

    // 评论是锦上添花，失败不该让整页报错
    try {
      comments.value = buildCommentTree(await fetchComments(id))
    } catch {
      comments.value = []
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : '文章加载失败'
  } finally {
    loading.value = false
  }
}

// immediate: true 让首次进入就加载；路由参数变化（文章间跳转）时也会重新加载
watch(
  () => Number(route.params.id),
  (id) => {
    if (id) load(id)
  },
  { immediate: true },
)
</script>

<template>
  <div>
    <p v-if="loading" class="mx-state">加载中…</p>

    <p v-else-if="error" class="mx-state mx-state--error">{{ error }}</p>

    <template v-else-if="post">
      <article>
        <h1 class="post__title" v-html="post.title.rendered"></h1>
        <p class="post__meta">
          <span>{{ post.date.slice(0, 10) }}</span>
          <span v-if="authorName"> · {{ authorName }}</span>
        </p>

        <!-- WordPress 返回的是格式化好的 HTML，必须用 v-html 渲染；
             mx-content 作用域负责正文排版 -->
        <div class="mx-content" v-html="post.content.rendered"></div>
      </article>

      <section class="post__comments">
        <h2>评论（{{ comments.length }}）</h2>

        <p v-if="post.comment_status === 'closed'" class="mx-state">该文章已关闭评论。</p>
        <p v-else-if="comments.length === 0" class="mx-state">还没有评论。</p>

        <ul v-else>
          <li v-for="c in comments" :key="c.id" class="comment">
            <p class="comment__head">
              <b>{{ c.author_name }}</b>
              <span> · {{ c.date.slice(0, 10) }}</span>
            </p>
            <div class="comment__body" v-html="c.content.rendered"></div>

            <!-- 一层回复（WordPress 的楼中楼靠 parent 字段还原） -->
            <ul v-if="c.replies.length" class="comment__replies">
              <li v-for="r in c.replies" :key="r.id" class="comment">
                <p class="comment__head">
                  <b>{{ r.author_name }}</b>
                  <span> · {{ r.date.slice(0, 10) }}</span>
                </p>
                <div class="comment__body" v-html="r.content.rendered"></div>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </template>
  </div>
</template>

<style scoped>
</style>
