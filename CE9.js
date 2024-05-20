function generatePyramid(n) {
    let result = '';
    for (let i = 1; i <= n; i++) {
        let str = '';
        for (let j = 1; j <= i; j++) {
            str += j + ' ';
        }
        if (i < n) {
            result += str.trim() + '\n';
        } else {
            result += str.trim()
        }
    }
    return result;
}


console.log(generatePyramid(6));