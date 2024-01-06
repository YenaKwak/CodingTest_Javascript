// Given string arrays s1 and s2, complete the solution function to return the same number of elements.



function solution (s1, s2) {
    const set1 = new Set(s1);
    const set2 = new Set(s2);
    
    
    const commonWords = [];
    
    
    set1.forEach((element) => {
     if (set2.has(element)){
         commonWords.push(element);
     }        
    });
return commonWords.length;
}

let s1 = ["a", "b", "c"];
let s2 = ["com", "b", "d", "p", "c"];
let result = solution(s1,s2);
console.log(result);

