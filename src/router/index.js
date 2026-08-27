import { createRouter, createWebHistory } from "vue-router"
import DailySolution from "../views/DailySolution.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/day/:day",
            name: "daily-solution",
            component: DailySolution,
        },
    ],
})

export default router
