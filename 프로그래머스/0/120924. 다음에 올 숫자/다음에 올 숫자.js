function solution(common){
    let length = common.length;
    
    const diff = common[1] - common[0];
    const latio = common[1] / common[0];
    
    if(common[2] - common[1] === diff){
        return common[length-1] + diff;
    } else if(common[2] / common[1] === latio){
        return common[length-1] * latio;
    }
}