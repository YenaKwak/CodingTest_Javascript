function solution(n) {
    let total = 0;
    
    if(n%2 === 1){ // 홀수인경우 // 모든양의정수의 합 리턴
        for(let i = 1; i<=n; i+=2){
            total += i; 
        }
    }else {
        for(let i = 2; i <=n; i+=2)    {
            total += i**2;
        }
    }
    
    return total;
}