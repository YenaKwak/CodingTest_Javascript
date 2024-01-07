function solution(array){
    let frequencyMap = [];
    
  array.forEach(num => {
      if(frequencyMap[num]){
         frequencyMap[num]++;
         }else {
          frequencyMap[num] = 1;
      }
      });
        
    let mode = -1;
    let maxFrequency = 0;
      
    for(const num in frequencyMap){
        if (frequencyMap[num] > maxFrequency){
            mode = parseInt(num);
            maxFrequency = frequencyMap[num];
        } else if(frequencyMap[num] === maxFrequency) {
            mode = -1;}
        }
    return mode;
}
