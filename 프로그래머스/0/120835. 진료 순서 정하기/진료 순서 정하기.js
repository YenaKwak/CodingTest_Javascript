function solution(emergency){
    const sortedEmergency  = Array.from(emergency).sort((a,b) => b - a);
const result = emergency.map(e => sortedEmergency .indexOf(e) +1);
return result;
}