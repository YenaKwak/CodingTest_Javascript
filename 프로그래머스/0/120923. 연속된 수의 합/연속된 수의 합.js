function solution(num, total) {

    let  middle = Math.floor(total / num);

    let  offset = Math.floor((num - 1) / 2);
    
    let  sequence = [];

    for (var i = 0; i < num; i++) {

        sequence.push(middle - offset + i);
    }

    return sequence;
}
