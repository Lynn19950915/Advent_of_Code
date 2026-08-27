<script setup>
import { RouterLink } from "vue-router"
import { days } from "../data/days.js"
</script>

<template>
    <div id="sidebar">
        <!-- 未完成則顯示為灰、不可點擊 -->
        <RouterLink 
            v-for="item in days" :key="item.day" :to="`/day/${item.day}`" 
            class="dailyItem" :class="{'locked': item.stars == 0}"
        >
            <span>{{ item.day }}</span>
            <span style="width: 160px">{{ item.title }}</span>

            <span style="width: 40px">
                {{ item.stars == 1? "★ ☆": item.stars == 2? "★ ★": "" }}
            </span>
        </RouterLink>
    </div>
</template>

<style scoped>
#sidebar {
    width: 30%; margin: 12px 0;
    font-size: 15px;
    border-right: 1px solid #e5e5e5;
}
a {
    text-decoration: none;
}
.dailyItem {
    margin: 5px 0; padding: 10px; gap: 6px;
    color: #3F3F3F;
    display: flex; justify-content: space-between; align-items: center;
}
.locked {
    color: #D0D3D3;
}

.dailyItem:hover {
    border-radius: 5px;
    color: #9F08C1; background-color: #99FFFF; 
}
.locked:hover {
    color: #FFFFFF; background-color: #A4A9A7;
    cursor: not-allowed;
}
</style>
