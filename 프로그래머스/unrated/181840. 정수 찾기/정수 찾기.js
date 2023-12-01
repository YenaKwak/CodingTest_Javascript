function solution (num_list, n){
if (num_list.includes(n)){
return 1;
}else {
return 0;
}
}

const myArray = [1, 2, 3, 4, 5];
const myNumber = 3;
const result = solution(myArray, myNumber);