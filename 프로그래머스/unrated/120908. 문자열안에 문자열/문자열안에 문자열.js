function solution(str1, str2) {
  if (str1.includes(str2)) {
    return 1;
  } else {
    return 2;
  }
}

console.log(solution("Hello world!", "Hello"));
console.log(solution("JavaScript", "Python"));
