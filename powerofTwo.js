var isPowerOfTwo = function (n) {
    if (n == 1) {
        return true
    }
    let pilot = 1
    let x = n
    while (x / 2 != 1) {
        if (x % 2 != 0 || x == 0) {
            return false
        }
        pilot++
        x = x / 2
    }
    return Math.pow(2, pilot) == n ? true : false
};
isPowerOfTwo(6)
