/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 0) return false
    let x = Math.log(n) / Math.log(4);
    if (x % 1 === 0) {
        return n === Math.pow(4, x);
    } else {
        return false
    }
};

isPowerOfFour(16)