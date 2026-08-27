import { part1 as sol01_1, part2 as sol01_2 } from "./solutions/day_01"
import day01_source from "./solutions/day_01.js?raw"

export const days = [
    {
        day: "01",
        title: "Trebuchet?!",
        summary: "Given a calibration document where each line hides numeric information within mixed characters. Extract the calibration value from every line and compute the final total.",
        stars: 1,
        part1: sol01_1,
        part2: sol01_2,
        sourceCode: day01_source,
    },
]
