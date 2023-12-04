function solution(age){
    
const currentYear = new Date().getFullYear();
const birthYear = currentYear - age;
return birthYear;
}

const ageOfHim = 40;
const BirthOfHim = solution(ageOfHim);


console.log(BirthOfHim);

