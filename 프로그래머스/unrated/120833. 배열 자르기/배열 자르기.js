function solution(numbers, num1, num2) {
    const slicedArray = numbers.slice(num1, num2+1);

    return slicedArray;
}

const numbers = [1, 2, 3, 4, 5];
const result = solution(numbers, 1, 3);
console.log(result);