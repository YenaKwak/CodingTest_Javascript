// The integer array numbers is given as a parameter.
// Complete the solution function so that it returns an array with twice the number of each element in numbers.


function solution(numbers){
    let dobleNumbers = numbers.map(function(numbers){
        return numbers*2;
    });
    
// let dobleNumbers = numbers.map(number => number*2)
    
    
    return dobleNumbers;
}


let inputNumbers = [1,2,3,4,5];
let result = solution(inputNumbers);

console.log(result);