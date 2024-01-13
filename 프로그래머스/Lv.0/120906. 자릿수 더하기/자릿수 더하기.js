function solution(n){
    let anwser = n.toString().split('');
    
    let sum = anwser.reduce((acc, curr)=> acc + parseInt(curr), 0);
    
    return sum;
}