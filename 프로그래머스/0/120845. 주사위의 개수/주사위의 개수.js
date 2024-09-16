function solution (box, n) {
    const countX = Math.floor(box[0] / n);
    const countY = Math.floor(box[1] / n);
    const countZ = Math.floor(box[2] / n);
    
    
    return countX*countY*countZ;
}