function solution(my_string) {
    // 문자열에서 숫자를 추출하는 정규 표현식
    let numbers = my_string.match(/\d+/g);
    
    // 숫자가 없다면 0을 반환
    if (numbers === null) return 0;
    
    // 추출된 숫자 배열을 숫자로 변환한 후 합산
    let sum = numbers.map(Number).reduce((acc, curr) => acc + curr, 0);
    
    return sum;
}
