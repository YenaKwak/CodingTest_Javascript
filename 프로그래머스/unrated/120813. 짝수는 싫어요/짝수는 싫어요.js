function solution(n){
    const result = [];
    
    
    for (let i = 1; i <= n; i+=2) {
        result.push(i);
    }
    
    return result;
}


const number = 10;
const resultArray = solution(number);
console.log(resultArray);