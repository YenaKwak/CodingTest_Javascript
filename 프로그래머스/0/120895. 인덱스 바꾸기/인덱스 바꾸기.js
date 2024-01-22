function solution(my_string, num1, num2) {

    let myArray = my_string.split('');


    [myArray[num1], myArray[num2]] = [myArray[num2], myArray[num1]];

    let result = myArray.join('');
    return result;
}