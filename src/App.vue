<script setup>
import Sidebar from "./components/Sidebar.vue"
</script>

<template>
    <div>
        <header>
            <div>
                <span id="logo">&lt;/&gt;</span>
                <span id="title">Advent of Code 2023</span>
            </div>
            <div>
                <span id="author">
                    <a href="https://github.com/Lynn19950915" target="_blank">Lynn Chen</a>
                </span>
            </div>
        </header>

        <div id="container">
            <Sidebar></Sidebar>
            <!-- 佔滿剩下的寬度 -->
            <main style="flex: 1">
                <RouterView></RouterView>
            </main>
        </div>
    </div>
</template>

<style scoped>
header {
    width: 70%; margin: auto; padding: 20px 15px;
    box-sizing: border-box; display: flex; justify-content: space-between; align-items: center;
    background-color: #FFFFFF;
    border-bottom: 1px solid #E5E5E5;
}
a {
    color: #9F08C1; text-decoration: none;
}
#container {
    width: 70%; margin: auto; padding: 0px 10px;
    background-color: #FFFFFF; box-sizing: border-box; display: flex;
}

header > div {
    /* 控制 span 垂直置中 */
    display: flex; align-items: center;
}
#logo {
    padding: 4px; border-radius: 8px;
    color: #FFFFFF; background-color: #9F08C1;
    font-size: 12px;
}
#title {
    margin-left: 15px;
    color: #9F08C1;
    font-size: 19px; font-weight: bold;
}
#author {
    padding: 6px 12px; border: 0.5px solid #9F08C1; border-radius: 5px;
}
#author:hover {
    opacity: 0.7; background-color: #99FFFF; 
}
</style>
