function solution(my_string) {
    let sum = 0;
    for (let char of my_string) {
        if (!isNaN(char) && char !== ' ') {
            sum += parseInt(char);
        }
    }
    return sum;
}