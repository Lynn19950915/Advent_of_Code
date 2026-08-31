// Part 1
export function part1(text) {
    let lines = text.trim().split("\r\n");
    let result = 0;

    for(let i=0; i<lines.length; i++) {
        let index = i+1;
        // 每一輪的完整線索
        let infos = lines[i].split(":")[1].replaceAll(";", ",");
        let info = infos.split(",");
        let max_red = 0, max_green = 0, max_blue = 0;

        for(let j=0; j<info.length; j++) {
            // 去除空格後切割出顏色、數量
            let color = info[j].trim().split(" ")[1];
            let count = info[j].trim().split(" ")[0]*1;

            if(color == "red"){max_red = Math.max(max_red, count)};
            if(color == "green"){max_green = Math.max(max_green, count)};
            if(color == "blue"){max_blue = Math.max(max_blue, count)};
        }
        if(max_red<=12 && max_green<=13 && max_blue<=14){
            result+=index;
        }
    }
    return result;
}

// Part 2
export function part2(text) {
    let lines = text.trim().split("\r\n");
    let result = 0;

    for(let i=0; i<lines.length; i++) {
        // 每一輪的完整線索
        let infos = lines[i].split(":")[1].replaceAll(";", ",");
        let info = infos.split(",");
        let max_red = 0, max_green = 0, max_blue = 0;

        for(let j=0; j<info.length; j++) {
            // 去除空格後切割出顏色、數量
            let color = info[j].trim().split(" ")[1];
            let count = info[j].trim().split(" ")[0]*1;

            if(color == "red"){max_red = Math.max(max_red, count)};
            if(color == "green"){max_green = Math.max(max_green, count)};
            if(color == "blue"){max_blue = Math.max(max_blue, count)};
        }
        let sum = max_red*max_green*max_blue;
        result+=sum;
    }
    return result;
}
