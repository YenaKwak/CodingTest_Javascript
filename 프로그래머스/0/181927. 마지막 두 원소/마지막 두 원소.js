function solution(num_list) {
    let last = num_list[num_list.length - 1]; // 마지막 원소
    let secondLast = num_list[num_list.length - 2]; // 마지막에서 두 번째 원소
    
    if (last > secondLast) {
        num_list.push(last - secondLast); // 마지막 원소가 더 크면 차를 추가
    } else {
        num_list.push(last * 2); // 그렇지 않으면 두 배
    }
    
    return num_list; 
}
