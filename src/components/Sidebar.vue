<script setup>
import { ref, computed } from "vue"
import { RouterLink } from "vue-router"
import { days } from "../data/days.js"

const currentPage = ref(1);
const showDays = computed(() => days.slice(
    (currentPage.value-1) * 10, currentPage.value * 10
))
</script>

<template>
    <div id="sidebar">
        <!-- 未完成則顯示為灰、不可點擊 -->
        <RouterLink 
            v-for="item in showDays" :key="item.day" :to="`/day/${item.day}`" 
            class="dailyItem" :class="{'locked': item.stars == 0}"
        >
            <span>{{ item.day }}</span>
            <span class="dailyTitle">{{ item.title }}</span>

            <span style="width: 40px">
                {{ item.stars == 1? "★ ☆": item.stars == 2? "★ ★": "" }}
            </span>
        </RouterLink>

        <div id="pagination">
            <span class="pageClick" v-show="currentPage > 1" @click="currentPage--">{{ "〈" }}</span>
            <span style="padding: 0 15px">{{ (currentPage-1)*10+1 }} - {{ currentPage*10 }}</span>
            <span class="pageClick" v-show="currentPage < 3" @click="currentPage++">{{ "〉" }}</span>
        </div>
    </div>
</template>

<style scoped>
#sidebar {
    width: 30%; margin: 12px 0;
    font-size: 15px;
    border-right: 1px solid #e5e5e5;
    /* 頂端列消失後，就固定住側欄 */
    top: 20px; position: sticky; align-self: flex-start;
}
a {
    text-decoration: none;
}
.dailyItem {
    height: 25px; margin: 8px; padding: 5px 10px; gap: 6px;
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
.dailyTitle {
    width: 160px;
    /* 固定高度並避免過長換行 */
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

#pagination {
    width: 50%; margin: 20px auto;
    display: flex; justify-content: center;
}
.pageClick {
    cursor: pointer;
}
#pageNumber {
    padding: 0 15px;
}
</style>
