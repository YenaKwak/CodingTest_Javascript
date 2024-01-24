function solution(my_string) {
let lowerString = my_string.toLowerCase().split('').sort().join('');
    return lowerString;
    
}


// sort는 배열만 되기떄문에 split을 사용해서 배열로 만들어 준 후 sort 사용 후 join!