function solution(A) {
    const sortedArray = A.sort(function(a, b){ return a - b });
    let isPermutation = 1;
    for (let i = 0; i < sortedArray.length; i++) {
        if ((i+1) != sortedArray[i]) {
            isPermutation = 0;
            break;
        }
    }
    return isPermutation;
}
