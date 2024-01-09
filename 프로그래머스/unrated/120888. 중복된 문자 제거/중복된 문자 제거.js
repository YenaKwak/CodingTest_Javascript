function solution(my_string){
    let charSet = {};
    
    let result = '';
    
    for (let char of my_string){
        if (!charSet[char]) {
            result += char;
            charSet[char] = true;
        }
    }
        return result;
}