// In English, the five letters a, e, i, o, and u are classified into vowels. 
// Complete the solution function so that when the string my_string is given as a parameter, 
// it returns a string with the vowels removed.


function solution(my_string){
    let result = my_string.replace(/[aeiou]/g, '');
return result;
}


let input = "nice to meet you";
let output = solution(input);
console.log(output);