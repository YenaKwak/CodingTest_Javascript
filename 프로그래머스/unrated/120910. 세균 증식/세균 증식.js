function solution(n, t){
    return n * Math.pow(2, t);
} 
//Math.pow 지수연산을 수행하는 함수 주어진 숫자의 지정된 지수승을 반환

let initialNumber = 7;
let timePassed = 15;

let result = solution(initialNumber,timePassed);
console.log(result);