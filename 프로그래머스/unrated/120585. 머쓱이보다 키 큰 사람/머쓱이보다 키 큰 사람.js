// When an integer array containing the heights of classmates and height, the height of the child,
// are given as parameters, 
//complete the solution function to return the number of people taller than the child.

function solution(array, height){
    let count = 0;
    
for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
        count++;
    }
}
    
    return count;
}


let friendsHeights = [149, 180, 192, 170];
let myHeight = 164;
let result = solution(friendsHeights, myHeight);
console.log(result)
