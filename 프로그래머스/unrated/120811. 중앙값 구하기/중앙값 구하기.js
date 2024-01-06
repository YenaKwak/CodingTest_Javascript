// The median is the value located in the center when any given values are sorted in order of size.
// For example, the median of 1, 2, 7, 10, and 11 is 7.
// When an integer array array is given as a parameter, 
// complete the solution function to return the median value.

function solution(array){
    array.sort((a, b) => a - b);
    
    
    const middleIndex = Math.floor(array.length / 2);
    
    return array[middleIndex];
}


const someArray = [1, 2, 7, 10, 11];
const result = solution(someArray);

console.log(result);