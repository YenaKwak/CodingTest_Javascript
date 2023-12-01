function solution(names) {
  const result = [];

  for (let i = 0; i < names.length; i += 5) {
    result.push(names[i]);
  }

  return result;
}


const names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];
const result = solution(names);

console.log(result);

