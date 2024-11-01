function solution(num_str){
    return num_str.split('').reduce((total,char)=> total+Number(char),0);
}