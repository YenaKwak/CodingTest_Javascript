function solution(my_string){
    let myArray = my_string.split('').reverse();
    return myArray.join('');
    
}

let inputString = "bread";
let result = solution(inputString);

console.log(result)
