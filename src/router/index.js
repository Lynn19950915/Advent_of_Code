import { createRouter, createWebHistory } from "vue-router"
import DailySolution from "../views/DailySolution.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // 預設呈現 Day-1 內容
        {
            path: "/",
            redirect: "/day/01",
        },
        {
            path: "/day/:day",
            name: "daily-solution",
            component: DailySolution,
        },
    ],
})

export default router
