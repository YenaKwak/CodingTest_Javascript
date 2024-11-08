function solution(my_string, alp) {
    const result = my_string.replace(new RegExp(alp, "g"), alp.toUpperCase());
    return result;
}
