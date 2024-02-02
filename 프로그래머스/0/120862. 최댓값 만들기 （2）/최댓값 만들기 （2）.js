function solution(numbers) {
    // 배열을 오름차순으로 정렬
    numbers.sort((a, b) => a - b);
    
    // 가장 큰 두 수의 곱과 가장 작은 두 수의 곱 중 더 큰 값을 계산
    const maxProduct = Math.max(numbers[0] * numbers[1], numbers[numbers.length - 1] * numbers[numbers.length - 2]);
    
    // 최댓값반환
    return maxProduct;
}