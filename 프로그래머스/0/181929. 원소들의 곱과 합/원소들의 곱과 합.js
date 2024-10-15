function solution(num_list) {
    // 곱 계산
    const product = num_list.reduce((acc, num) => acc * num, 1);
    
    // 합 계산
    const sum = num_list.reduce((acc, num) => acc + num, 0);
    
    // 합의 제곱 계산
    const sumSquared = sum * sum;
    
    // 곱과 합의 제곱 비교 후 결과 반환
    return product < sumSquared ? 1 : 0;
}