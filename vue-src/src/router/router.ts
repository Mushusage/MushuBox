import { createWebHistory, createRouter, type RouteRecordRaw } from "vue-router"

import HomeView from "../views/HomeView.vue"
import ToDoList from "../components/ToDoList.vue"
import PostView from "../views/PostView.vue"
import PageView from "../views/PageView.vue"
import NotFound from "../views/NotFound.vue"
import Blog from "../components/Blog.vue"


const routes: RouteRecordRaw[] = [
    { path: "/", component: HomeView },
    { path: "/ToDoList", component: ToDoList },
    { path: "/blog", component: Blog },
    { path: "/blog/:id(\\d+)/:slug", component: PostView },
    { path: "/:slug", component: PageView },
    { path: "/:pathMatch(.*)*", component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router