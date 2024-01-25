function solution(my_string){
    const numbers = []; //빈배열 생성, 여기에 숫자를 담을거임
    
    for(let i = 0; i < my_string.length; i++){ //문자열을 순회하면서 숫자만 추출하는 배열 생성할거임
        const char = my_string.charAt(i); // charAt 문자열에서 특정인덱스에 위치한 문자를 반환 
        if (!isNaN(char)){ //만약 char에 있는것이 숫자라면
            numbers.push(Number(char)); // 문자열에서 추출한 숫자를 numbers 배열에 추가
        }
    }
    const sortedNumbers = numbers.sort((a,b) => a - b); //numbers 배열을 오름차순으로 정렬
    return sortedNumbers;
}