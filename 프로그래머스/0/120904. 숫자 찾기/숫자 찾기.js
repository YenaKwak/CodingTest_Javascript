function solution (num, k){
    const numString = num.toString();
    
    
    for(let i = 0; i < numString.length; i++){
        if(parseInt(numString[i]) === k){
           return i+1;
           }
    }
return -1;
}