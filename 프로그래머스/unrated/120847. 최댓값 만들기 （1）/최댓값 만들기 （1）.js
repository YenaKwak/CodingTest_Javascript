// The integer array numbers is given as a parameter. 
// Complete the solution function to return the maximum value that can be created by multiplying two of the elements of numbers.

function solution(numbers){
    numbers.sort((a,b)=> b - a);
    
    return numbers[0] * numbers[1]; 
}


const someNumbers = [0, 31, 24, 10, 1, 9];
const result = solution(someNumbers);

console.log(result);
