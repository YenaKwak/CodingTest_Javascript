function solution(number, n, m){
    if (number % n === 0 && number % m === 0){
return 1;
}else {
return 0;
}
}


const result = solution(60,2,3);
const resultTwo = solution(55,10,5);