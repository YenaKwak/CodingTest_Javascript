// The string my_string and the letter letter are given as parameters.
// Complete the solution function to return a string with the letter removed from my_string.


function solution(my_string, letter) {
    let divide = my_string.split(letter);
    let resultString = divide.join('');
    return resultString;
}


let randomString = "abcdef";
let removeThis = "f";
let resultString = solution(randomString, removeThis);


console.log(resultString);

