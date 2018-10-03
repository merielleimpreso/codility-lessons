function solution(A) {
    if (A.length == 0) {
        return 1;
    }
    const sortedArray = A.sort(function(a, b){ return a - b });
    let element = 1;
    for (let i = 0; i < sortedArray.length; i++) {
        if (element == sortedArray[i]) {
            element++;
        } else {
            break;
        }
    }
    return element;
}
