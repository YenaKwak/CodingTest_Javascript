// Cut the pizza into six pieces. When n, the number of people who will share the pizza, is given as a parameter, complete the solution function to return the minimum number of slices that should be ordered if n people must all eat the same number of pizza slices without leaving any pizza they ordered.

const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}





const solution = (n) => {
    let piece = 6;

    for (; piece % n !== 0; piece += 6) {
        // 반복문 내에서는 특별한 처리가 필요 없음
    }
// 루프의 초기식(initialization) 부분은 세미콜론 ;으로 시작합니다. 이 부분에서는 이미 초기화된 piece 변수를 사용하며, 반복 조건에 해당하는 표현식이 포함되어 있습니다.
    return piece / 6;
};
