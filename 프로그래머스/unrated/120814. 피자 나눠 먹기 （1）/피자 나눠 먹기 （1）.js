// Given the number n of people to share pizza with, 
// complete the solution function that returns the number of pizzas needed for
// everyone to eat at least one slice of pizza.

function solution(n){
    let pieces = 7;
    
    let pizza = Math.ceil(n / pieces);   

return pizza;
}

let people = 7;
let result = solution(people);
console.log(result);
