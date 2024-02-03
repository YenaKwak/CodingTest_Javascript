function solution(s) {
  let charCount = {};// 문자의 등장 횟수를 저장할 객체
    
    // 문자열을 순회하며 등장 횟수 계산
 for (let char of s) {
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }
    let onceChars = []; // 한 번만 등장하는 문자들을 배열에 저장
    for (let char in charCount){
        if(charCount[char] === 1){
            onceChars.push(char);
        }
    }

    onceChars.sort();// 사전 순으로 정렬
    return onceChars.join('');  // 배열을 문자열로 합쳐 반환
}