// Part 1
export function part1(text) {
    let lines = text.trim().split("\r\n");
    let result = 0;

    for(let i=0; i<lines.length; i++) {
        let set = new Set();
        // 蒐集所有的中獎號碼
        let wins = lines[i].split(":")[1].split("|")[0].split(" ");
        for(let j=0; j<wins.length; j++) {
            if(wins[j]!="") {set.add(wins[j])};
        }

        let points = 1;
        let nums = lines[i].split(":")[1].split("|")[1].split(" ");
        for(let k=0; k<nums.length; k++) {
            if(nums[k]!="" && set.has(nums[k])) {points*=2};
        }
        // points=1 代表未中獎
        if(points>1){result+=(points/2)};
    }
    return result;
}

// Part 2
export function part2(text) {
    let lines = text.trim().split("\r\n");
    let result = 0;
    // 初始狀態是每號獎券都有 1 張
    let map = new Array(lines.length).fill(1);

    for(let i=0; i<lines.length; i++) {
        let set = new Set();
        // 蒐集所有的中獎號碼
        let wins = lines[i].split(":")[1].split("|")[0].split(" ");
        for(let j=0; j<wins.length; j++) {
            if(wins[j]!="") {set.add(wins[j])};
        }

        let win_time = 0;
        let nums = lines[i].split(":")[1].split("|")[1].split(" ");
        for(let k=0; k<nums.length; k++) {
            if(nums[k]!="" && set.has(nums[k])) {win_time++};
        }
        // 依中獎次數往下兌換獎券
        for(let l=1; l<=win_time; l++) {
            map[i+l] = map[i+l]+map[i];
        }
        result+=map[i];
    }
    return result;
}
