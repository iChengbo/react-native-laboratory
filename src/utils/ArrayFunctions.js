

export function fillArrayForUnite(arr, basicNum, filler, isTail = true) {
    let filledArr = arr;
    const needNum = basicNum - arr.length % basicNum;
    if(needNum != basicNum) {
        // 如果是从尾部填充
        if(isTail) {
            filledArr = filledArr.concat(Array(needNum).fill(filler));
        } else {
            filledArr = Array(needNum).fill(filler).concat(filledArr);
        }
    }
    return filledArr;
}
