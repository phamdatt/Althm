/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // let sum = ''
    // let x1 = x
    // while (x1 > 0) {
    //     let value = x1 % 10
    //     sum += value.toString()
    //     x1 = x1 / 10 | 0
    // }
    // return parseInt(sum) === x
    // var sum = 0;
    // var bientam = x;
    // var r;
    // while (x > 0) {
    //     r = x % 10;
    //     sum = (sum * 10) + r;
    //     x = Math.floor(x / 10);
    // }
    // if (bientam === sum) {
    //     return true;
    // } else {
    //     return false
    // }
    let sRegex = s.split("").reverse().join("")
    console.log(sRegex)
    return sRegex === s
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))