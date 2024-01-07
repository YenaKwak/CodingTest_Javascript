// When an integer n is given as a parameter, complete the solution function so that it returns 1 if n is a square number, and 2 otherwise.

function solution(n){
    let squareRoot  = Math.sqrt(n);
    
    return Number.isInteger(squareRoot) ? 1 : 2
}
