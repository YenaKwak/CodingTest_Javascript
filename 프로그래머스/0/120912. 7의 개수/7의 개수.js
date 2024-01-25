function solution(array){
    let count = 0;

    for(let i = 0; i<array.length; i++){
        const numbersString = array[i].toString();
                //if (array[i] === 7) { count++ 하면 각 숫자를 7과 비교하는 것이 아니라, 해당 숫자가 7인지를 확인함.
        //만약에 array[i]가 77 같은 두 자릿수의 숫자라면, 이 조건에는 맞지 않아서 7의 개수를 모두 세지못함
        //따라서 각 숫자를 문자열로 변환하고, 문자열에서 7의 개수를 세는 방식을 사용하는 것이 더 적합
        
    for(let j = 0; j<numbersString.length; j++){
        if(numbersString[j] === '7'){
            count++;
        }
    } 
    }
    return count;
}
