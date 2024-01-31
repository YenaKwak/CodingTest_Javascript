function solution(a,b){
if(a === b) return 0;
    let count = 0;
    let tempA = a;
    
    for (let i = 0; i < a.length; i++){
    tempA = tempA[tempA.length -1] + tempA.substring(0, tempA.length -1);
    count ++;
   
    if(tempA === b) return count;
    }
    return -1;
}