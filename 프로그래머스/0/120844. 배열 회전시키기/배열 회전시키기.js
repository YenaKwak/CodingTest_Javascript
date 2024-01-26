function solution(numbers, direction){
    if (direction === "right"){
    const lastElement = numbers.pop(); //배열의 맨 뒤에서 하나 요소 제거
    numbers.unshift(lastElement); //unshift 배열의 맨 앞에 하나 이상의 요소 추가, 새배열의 길이 반환
    } else if (direction === "left"){
        const firstElement = numbers.shift(); //shift 배열의 맨 앞 첫번째 요소제거,그 값을 반환
        numbers.push(firstElement);
    }
    return numbers;
    }
