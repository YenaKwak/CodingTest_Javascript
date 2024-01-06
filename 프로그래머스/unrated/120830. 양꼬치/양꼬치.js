// The lamb skewer restaurant gives you a free drink for every 10 servings.
// Lamb skewers cost 12,000 won per person, and drinks cost 2,000 won.
// When integers n and k are given as parameters,
// complete the solution function to return the total amount you have to pay 
// if you eat n portions of lamb skewers and k drinks.

function solution(n,k){
    let yakitoriPricePerPerson = 12000; //양꼬치1인분
    let drinkPrice = 2000; //음료수1개
    
    let yakitoriCount = n; //먹은 양꼬치 개수
    let totalYakitoriPrice = yakitoriCount * yakitoriPricePerPerson //총 양꼬치비용
    
    
    let freeDrink = Math.floor(yakitoriCount / 10); //음료서비스 횟수
    let totalDrinkPrice = Math.max(0, k - freeDrink) * drinkPrice; //서비스 이후 남은 음료수 비용
    // 0과 k - freeDrink 중에서 큰 값을 선택합니다. 이렇게 함으로써 음료수를 주문할 때 추가 비용이 발생하는지를 체크하고, 추가 비용이 발생하지 않으면 0을 선택하여 음료수 비용을 계산합니다.
    
    let totalPrice = totalYakitoriPrice + totalDrinkPrice
    return totalPrice
}

let result = solution(10, 3);
console.log(result);
