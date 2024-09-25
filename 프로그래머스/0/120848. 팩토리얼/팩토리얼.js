function solution(n) {
    let factorial = 1;  // 팩토리얼 값을 저장하는 변수
    let i = 1;  // 팩토리얼을 계산할 숫자 i

    // n을 넘지 않을 때까지 팩토리얼을 계산
    while (factorial <= n) {
        i++;
        factorial *= i;
    }

    // i!이 n을 넘으면 직전의 i를 반환
    return i - 1;
}