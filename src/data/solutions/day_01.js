// Part 1
export function part1(text) {
    let lines = text.trim().split("\r\n");
    let result = 0;

    for(let i=0; i<lines.length; i++) {
        let digit = -1;
        for(let j=0; j<lines[i].length; j++) {
            if (lines[i][j]>=0 && lines[i][j]<=9) {
                // digit 為負代表首次找到數字
                if (digit<0) {
                    result = result + lines[i][j] * 10;
                }
                digit = lines[i][j] * 1;
            }
        }
        // 跑完再把最後的數字加上
        result = result + digit;
    }
    return result;
}

// Part 2
export function part2() {
    return null;
}
