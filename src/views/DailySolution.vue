<script setup>
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import { days } from "../data/days.js"

const route = useRoute()
// 根據天數取得對應資料
const currentDay = computed(() => days.find(
	(item) => item.day == route.params.day
))

const inputFile = ref(null)
const filesize = ref(0)
function handleFile(event) {
	inputFile.value = event.target.files[0]
	filesize.value = Math.round(inputFile.value.size / 1024)
}

const answer1 = ref(null)
const answer2 = ref(null)
// 去執行每日對應的解法，顯示答案
async function getAnswer() {
	const input = await inputFile.value.text()
	answer1.value = currentDay.value.part1(input)
	answer2.value = currentDay.value.part2(input)
}
</script>

<template>
	<div id="content">
		<h5 style="color: #9F08C1">Day {{ currentDay.day }}</h5>
		<div style="display: flex">
			<div id="title">{{ currentDay.title }}</div>
			<span id="status">
				{{ currentDay.stars == 2? "/ solved": currentDay.stars == 1? "/ solving": "" }}
			</span>
		</div>

		<div id="description">
			<div>{{ currentDay.summary }}</div>
			<div id="link1">
				<!-- 轉型別後，組裝題目的原始連結 -->
				<a :href="`https://adventofcode.com/2023/day/${Number(currentDay.day)}`" target="_blank">View Full Description</a>
			</div>
		</div>

		<div id="upload">
			<div><b>INPUT</b></div>
			<div id="section">
				<div style="color: #9A5590">Upload your puzzle input (.txt)</div>
				<div v-if="!inputFile" id="fileBox" style="cursor: pointer">
					<label for="fileInput">
						<span>尚無文件，點擊以上傳</span>
					</label>
				</div>

				<div v-else>
					<div id="fileBox">📄 {{ inputFile.name }}｜{{ filesize }} KB</div>
					<div id="execute" @click="getAnswer">Run Solution ▷</div>
				</div>
			</div>
			<!-- 觸發隱藏的上傳按鈕 -->
			<input id="fileInput" type="file" accept=".txt" @change="handleFile" />
		</div>
		
		<div id="result">
			<div><b>RESULT</b></div>
			<div id="resultFlex">
				<div class="solved">
					<div style="display: flex; justify-content: space-between">
						<div style="font-size: 14px">Part 1</div>
						<div style="font-size: 11px">
							{{ answer1? "✓ Completed": "○ Ready" }}
						</div>
					</div>
					<div id="answer">{{ answer1 }}</div>
				</div>
				<!-- 未完成則呈現灰色 (無答案) -->
				<div :class="currentDay.stars == 2? 'solved': 'unsolved'">
					<div style="display: flex; justify-content: space-between">
						<div style="font-size: 14px">Part 2</div>
						<div style="font-size: 11px">
							{{ currentDay.stars == 1? "- Unsolved": answer2? "✓ Completed": "○ Ready" }}
						</div>
					</div>
					<div id="answer">{{ answer2? answer2: "🤔" }}</div>
				</div>
			</div>
		</div>

		<div id="solution">
			<div><b>SOLUTION</b></div>
			<div id="solTitle">
				<span id="solType">JS</span>
				<div id="solName">day_{{ currentDay.day }}.js</div>
				<div id="link2">
					<a :href="`https://github.com/Lynn19950915/Advent_of_Code/blob/main/src/data/solutions/day_${currentDay.day}.js`" target="_blank">View Code</a>
				</div>
			</div>

			<div id="solCode">
				<!-- 列出程式原始碼 -->
				<!-- <pre><code>{{ currentDay.sourceCode }}</code></pre> -->

				<div v-for="(line, index) in currentDay.sourceCode.split('\n')" :key="index" style="line-height: 17px">
					<!-- 產生程式的行數及註解換色 -->
					<span class="lineNumber">{{ index+1 }}</span>
					<code :class="{ comment: line.trim().startsWith('//') }">{{ line }}</code>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped src="./DailySolution.css"></style>
