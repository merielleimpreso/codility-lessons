function solution(A, K) {
    if (A.length <= 0) {
        return A;
    }
    let array = A;
    for (let i = 0; i < K; i++) {
        array = rotate(array);
    }
    return array;
}

function rotate(array) {
    const lastItemIndex = array.length-1;
    let rotatedArray = [array[lastItemIndex]];
    for (let i = 0; i < lastItemIndex; i++) {
        rotatedArray.push(array[i]);
    }
    return rotatedArray;
}
