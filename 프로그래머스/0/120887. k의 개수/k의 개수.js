function solution(i, j, k) {
    let count = 0;
    for (let number = i; number <= j; number++) {
        const numberStr = number.toString();
        for (let char of numberStr) {
            if (char === k.toString()) {
                count++;
            }
        }
    }
    return count;
}