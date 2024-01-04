// Iced Americano costs 5,500 won per glass. 
// When the money I have is given as a parameter, 
// complete the solution function to return an array containing the maximum number of Americano cups I can drink and the remaining money in order.



function solution(money){
    const oneCoffe = 5500;
    const maxCoffeIcan = Math.floor(money / oneCoffe);
    const moneyRest = money % oneCoffe;
    
    
    return [maxCoffeIcan, moneyRest];
    
}

const money = 5500;
const result = solution(money);

console.log(result);
