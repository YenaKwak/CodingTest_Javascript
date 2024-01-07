// When an array containing integers and an integer n are given as parameters,
// complete the solution function to return how many n are in the array.

function solution(array, n){
    let filteredArray = array.filter(function(element){
        return element === n;
    });
    
    return filteredArray.length;
}

let someArray =[1, 1, 2, 3, 4, 5];
let n = 1;
let result = solution(someArray, n);
console.log(result);