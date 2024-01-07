// I am trying to write each letter at a size of 2cm horizontally so that
// my grandmother can easily see it. When writing the letter only horizontally,
// please complete the solution function to return the minimum horizontal length of the letter paper needed to write the congratulatory message.

function solution(message){
    let paperWidth = 0;
    
    for(let i = 0; i < message.length; i++){
        if (message[i] === ' '){
            paperWidth += 2;
        }else{
            paperWidth += 2;
        }
        }
return paperWidth;
}


let message = "I love you~";
let result = solution(message);
console.log(result);
