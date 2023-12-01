function solution(arr, k){
if (k % 2 === 1){
return arr.map(element => element * k);
} else {
return arr.map(element => element + k);
}
}

const myArray = [1, 2, 3, 100, 99, 98];
const myNumber = 3;
const result = solution (myArray, myNumber);