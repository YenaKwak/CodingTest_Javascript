function solution(array){
    let count = 0;

    for(let i = 0; i<array.length; i++){
        const numbersString = array[i].toString();
        
    for(let j = 0; j<numbersString.length; j++){
        if(numbersString[j] === '7'){
            count++;
        }
    } 
    }
    return count;
}