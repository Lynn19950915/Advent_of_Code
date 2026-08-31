import { part1 as sol01_1, part2 as sol01_2 } from "./solutions/day_01"
import { part1 as sol02_1, part2 as sol02_2 } from "./solutions/day_02"

// 顯示在介面上的原始碼文字
import day01_source from "./solutions/day_01.js?raw"
import day02_source from "./solutions/day_02.js?raw"

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
    {
        day: "02",
        title: "Cube Conundrum",
        summary: "Given records of cube games with red, green, and blue cubes revealed across multiple rounds. Identify which games are possible within the cube limits and compute the sum of their IDs.",
        stars: 2,
        part1: sol02_1,
        part2: sol02_2,
        sourceCode: day02_source,
    },
    {
        day: "03",
        title: "Gear Ratios",
        summary: "",
        stars: 0,
    },
    {
        day: "04",
        title: "Scratchcards",
        summary: "",
        stars: 0,
    },
    {
        day: "05",
        title: "If You Give A Seed A Fertilizer",
        summary: "",
        stars: 0,
    },
    {
        day: "06",
        title: "Wait For It",
        summary: "",
        stars: 0,
    },
    {
        day: "07",
        title: "Camel Cards",
        summary: "",
        stars: 0,
    },
    {
        day: "08",
        title: "Haunted Wasteland",
        summary: "",
        stars: 0,
    },
    {
        day: "09",
        title: "Mirage Maintenance",
        summary: "",
        stars: 0,
    },
    {
        day: "10",
        title: "Pipe Maze",
        summary: "",
        stars: 0,
    },
    {
        day: "11",
        title: "Cosmic Expansion",
        summary: "",
        stars: 0,
    },
    {
        day: "12",
        title: "Hot Springs",
        summary: "",
        stars: 0,
    },
    {
        day: "13",
        title: "Point of Incidence",
        summary: "",
        stars: 0,
    },
    {
        day: "14",
        title: "Parabolic Reflector Dish",
        summary: "",
        stars: 0,
    },
    {
        day: "15",
        title: "Lens Library",
        summary: "",
        stars: 0,
    },
    {
        day: "16",
        title: "The Floor Will Be Lava",
        summary: "",
        stars: 0,
    },
    {
        day: "17",
        title: "Clumsy Crucible",
        summary: "",
        stars: 0,
    },
    {
        day: "18",
        title: "Lavaduct Lagoon",
        summary: "",
        stars: 0,
    },
    {
        day: "19",
        title: "Aplenty",
        summary: "",
        stars: 0,
    },
    {
        day: "20",
        title: "Pulse Propagation",
        summary: "",
        stars: 0,
    },
    {
        day: "21",
        title: "Step Counter",
        summary: "",
        stars: 0,
    },
    {
        day: "22",
        title: "Sand Slabs",
        summary: "",
        stars: 0,
    },
    {
        day: "23",
        title: "A Long Walk",
        summary: "",
        stars: 0,
    },
    {
        day: "24",
        title: "Never Tell Me The Odds",
        summary: "",
        stars: 0,
    },
    {
        day: "25",
        title: "Snowverload",
        summary: "",
        stars: 0,
    },
]
