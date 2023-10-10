function countSetBit(number) {
    // let bitStr = number.toString(2)
    // let count = 0;
    // for (let i = 0; i < bitStr.length; i++) {
    //     if (bitStr[i] == 1) count++
    // }
    // return count
    // let count = 0
    // while (number) {
    //     count += number & 1
    //     number >>= 1
    // }
    // return count

    let count = 0;
    while(number > 0){
        number &= number - 1
        count++
    }
    return count
}
console.log(countSetBit(9))
