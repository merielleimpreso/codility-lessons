function solution(A) {
    const sortedArray = A.sort(function(a, b) { return b - a });

    let previous = sortedArray[0];
    let count = 1;
    for (let i = 1; i < sortedArray.length; i++) {
        if (previous == sortedArray[i]) {
            count++;
        } else {
            if (count%2 == 0) {
                previous = sortedArray[i];
                count = 1;
            } else {
                break;
            }
        }
    }
    
    return previous;
}
