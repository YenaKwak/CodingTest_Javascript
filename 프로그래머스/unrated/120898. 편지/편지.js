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