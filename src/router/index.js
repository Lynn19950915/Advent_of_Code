import { createRouter, createWebHistory } from "vue-router"
import DailySolution from "../views/DailySolution.vue"
import { days } from "../data/days.js"

const router = createRouter({
    // 連動追蹤網址的變化，並預設呈現 Day-1
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/day/01",
        },
        {
            path: "/day/:day",
            name: "daily-solution",
            component: DailySolution,

            // 路由守衛：檢查當日是否有解題紀錄
            beforeEnter: (to) => {
                const targetDay = days.find(
                    item => item.day == to.params.day
                )
                if (targetDay.stars == 0) {
                    return "/day/01"
                }
            }
        },
    ],
})

export default router
