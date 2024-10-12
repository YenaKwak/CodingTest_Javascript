function solution(n, control) {
    for (let char of control) {
        switch (char) {
            case 'w':
                n += 1; // n이 1 커짐
                break;
            case 's':
                n -= 1; // n이 1 작아짐
                break;
            case 'd':
                n += 10; // n이 10 커짐
                break;
            case 'a':
                n -= 10; // n이 10 작아짐
                break;
        }
    }
    return n; 
}
