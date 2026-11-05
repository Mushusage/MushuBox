/**
 * WordPress REST API 基础封装
 *
 * 全部使用 WordPress 自带端点（wp/v2），主题无需自定义 PHP 即可读取内容。
 * 站点同源，所以用相对路径即可；开发时若走 vite 代理也能正常工作。
 */

const REST = '/wp-json/wp/v2/'

/** 通用 JSON 请求，非 2xx 抛错，便于页面显示错误状态 */
async function getJson<T>(path: string): Promise<T> {
    const res = await fetch(REST + path)
    if (!res.ok) {
        throw new Error(`请求失败：${res.status} ${res.statusText}`)
    }
    return res.json() as Promise<T>
}

/** WordPress 的字符串都以 { rendered: HTML } 形式返回 */
export interface WpRendered {
    rendered: string
}

/** 文章 / 页面的通用结构 */
export interface WpPost {
    id: number
    slug: string
    type: string
    link: string
    title: WpRendered
    content: WpRendered
    excerpt: WpRendered
    date: string
    author: number
    comment_status: 'open' | 'closed'
    _embedded?: {
        author?: Array<{ name: string; link: string }>
    }
}

/** 评论结构 */
export interface WpComment {
    id: number
    parent: number
    author_name: string
    date: string
    content: WpRendered
}

/** 取文章列表（_embed 顺带把作者名一起返回，省一次请求） */
export function fetchPosts(perPage = 10) {
    return getJson<WpPost[]>(`posts?per_page=${perPage}&_embed`)
}

/** 按 ID 取单篇文章 */
export function fetchPost(id: number) {
    return getJson<WpPost>(`posts/${id}?_embed`)
}

/** 按 slug 取单个页面；不存在时返回 null */
export async function fetchPageBySlug(slug: string) {
    const list = await getJson<WpPost[]>(`pages?slug=${encodeURIComponent(slug)}`)
    return list.length > 0 ? list[0] : null
}

/** 取某篇文章的评论，按时间正序 */
export function fetchComments(postId: number) {
    return getJson<WpComment[]>(`comments?post=${postId}&order=asc&per_page=100`)
}

/**
 * 把 WordPress 返回的绝对链接转成 vue-router 内部路径。
 * 例：http://mushu.local/blog/1/hello-world/ → /blog/1/hello-world/
 * 这样 <RouterLink :to="..."> 才会走 SPA 内部跳转而非整页刷新。
 */
export function toInternalPath(link: string) {
    try {
        return new URL(link).pathname
    } catch {
        return link
    }
}

/**
 * 把扁平评论数组组装成两层结构（顶级 + 回复）。
 * WordPress 的 parent 为 0 表示顶级评论。
 */
export function buildCommentTree(comments: WpComment[]) {
    const topLevel = comments.filter((c) => c.parent === 0)
    const childrenOf = (parentId: number) => comments.filter((c) => c.parent === parentId)
    return topLevel.map((c) => ({ ...c, replies: childrenOf(c.id) }))
}
