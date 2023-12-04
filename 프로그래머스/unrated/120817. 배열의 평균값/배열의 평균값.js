function solution(numbers){
    const length = numbers.length;
    
    const sum = numbers.reduce((acc, num) => acc + num);
    
    return sum / length;
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = solution(number);