function solution(num_list) {
     // 결과를 담을 배열 초기화
    let result = [0, 0];// [짝수의 개수, 홀수의 개수]

    // 배열을 순회하면서 짝수와 홀수 개수를 세기
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) { 
            // 현재 원소가 짝수인 경우
            result[0]++;// 짝수 개수 증가
        } else {// 현재 원소가 홀수인 경우
            result[1]++; // 홀수 개수 증가
        }
    }

    return result;
}

let num_list = [1,2,3,4,5];
let resultArray = solution(num_list);

console.log(resultArray);

