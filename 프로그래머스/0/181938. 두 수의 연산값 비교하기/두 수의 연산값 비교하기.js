function solution (a,b) {
    const abConcat = parseInt(String(a)+String(b));
    
    const product = 2 * a * b;
    
    return abConcat >= product ? abConcat : product;

    
}
