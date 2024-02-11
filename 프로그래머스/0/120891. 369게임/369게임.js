function solution(order){
    let count = 0;
    let orderString = order.toString();
    
    for (let i = 0; i < orderString.length; i++){
        
        if (orderString[i]==='3' || orderString[i]==='6' || orderString[i]==='9'){
            count++;
        }
    }
    return count;
}