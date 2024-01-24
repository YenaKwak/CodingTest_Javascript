function solution(array, n) {
    let closestNumber = array[0];

    for (let i = 1; i < array.length; i++) {
        const currentDiff = Math.abs(array[i] - n);
        const closestDiff = Math.abs(closestNumber - n);

        if (currentDiff < closestDiff || (currentDiff === closestDiff && array[i] < closestNumber)) {
            closestNumber = array[i];
        }
    }

    return closestNumber;
}
