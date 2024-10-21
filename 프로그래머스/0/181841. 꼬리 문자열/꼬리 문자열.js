function solution(str_list, ex){
    const filteredList = str_list.filter(str => !str.includes(ex));
    
    return filteredList.join('');
}