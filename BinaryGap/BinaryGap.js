function solution(N) {
    const binaryString = N.toString(2);
    let result = 0;
    let count = 0;
    for (let i = 1; i < binaryString.length; i++) {
        if (binaryString[i] == '0') {
            count++;
        } else {
            if (count > result) {
                result = count;
            }
            count = 0;
        }
    }
    return result;
}
