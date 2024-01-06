// A 5% discount is given for purchases over 100,000 won, a 10% discount for purchases over 300,000 won, and a 20% discount for purchases over 500,000 won.
// Given the price of the clothes purchased, complete the solution function to return the amount to be paid.

function solution(price){
    let discountRate = 0;
    
// 가장 큰 할인율부터 작은 할인율 순서대로 조건을 확인해야 합니다.
    if (price >= 500000) {
        discountRate = 0.2;
    } else if (price >= 300000) {
        discountRate = 0.1;
    } else if (price >= 100000) {
        discountRate = 0.05;
    }
    
  let discountAmount = price * discountRate;
    let discountedPrice = price - discountAmount;
    return Math.floor(discountedPrice);
// 소수점 이하를 버린 정수로 반환하기 위해서는 Math.floor 함수를 사용
}


    let clothesPrice = 580000;
    let result = solution(clothesPrice);
    console.log(result);
    
