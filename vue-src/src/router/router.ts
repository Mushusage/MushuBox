/*
 * Copyright 2026 Mushu
 * Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
import { createWebHistory, createRouter, type RouteRecordRaw } from "vue-router"

import HomeView from "../views/HomeView.vue"
import ToDoList from "../components/ToDoList.vue"
import NotFound from "../views/NotFound.vue"
import BlogView from "../views/BlogView.vue";


const routes: RouteRecordRaw[] = [
    { path: "/", component: HomeView },
    { path: "/ToDoList", component: ToDoList },
    { path: "/blog", component: BlogView },
    { path: "/blog/:id(\\d+)/:slug", component: BlogView },
    { path: "/:pathMatch(.*)*", component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router