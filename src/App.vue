<script setup>
import Sidebar from "./components/Sidebar.vue"
</script>

<template>
    <div>
        <header>
            <span id="logo">&lt;/&gt;</span>
            <span id="title">Advent of Code 2023</span>
            <span id="author">
                <a href="https://github.com/Lynn19950915" target="_blank">Lynn Chen</a>
            </span>
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
    width: 70%; margin: auto; padding: 20px;
    box-sizing: border-box; border-bottom: 1px solid #E5E5E5;
    background-color: #FFFFFF;
    display: flex; align-items: center; gap: 12px;
}
#logo {
    padding: 4px;
    border-radius: 8px;
    color: #FFFFFF; background-color: #9F08C1;
    font-size: 12px;
}
#title {
    font-size: 19px; font-weight: bold;
    color: #9F08C1;
}
a {
    color: #9F08C1; text-decoration: none;
}
#author {
    margin-left: auto; padding: 6px 12px;
    border: 0.5px solid #9F08C1; border-radius: 5px;
}

#container {
    width: 70%; margin: auto; padding: 0px 10px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    display: flex;
}
</style>
