function solution(n) {
    let count = 0;

    for (let i = 2; i <= n; i++) {
        if (isComposite(i)) {
            count++;
        }
    }

    return count;
}

function isComposite(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return true;
        }
    }
    return false;
}
