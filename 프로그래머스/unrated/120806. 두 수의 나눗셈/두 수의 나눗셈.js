function solution(num1, num2){
    const result = Math.floor((num1/num2)*1000);
    return result;
}


const num1 = 3;
const num2 = 2;
const result2 = solution(num1,num2);

console.log(result2);