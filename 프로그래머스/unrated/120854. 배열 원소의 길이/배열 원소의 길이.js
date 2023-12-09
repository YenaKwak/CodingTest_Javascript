function solution(strlist){
    const lengthList = strlist.map(str => str.length);
    return lengthList;
    }

const inputList = ["We", "are", "the", "world!"];
const result = solution(inputList);

console.log(result)