/**
 * @param {number} num
 * @return {number}
 */
function checkOneDigit(num) {
    if (num % 10 == num) return true
    return false
}

var addDigits = function (num) {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
    // let result = Infinity;
    // if (num === 0) return 0; // Edge case
    // while (true) {
    //     if (result < 10) return result;
    //     digVal = (num % 10) + Math.floor(num / 10);  // Get the last digit and quotient
    //     result = digVal;
    //     num = digVal;
    // }
};
console.log(addDigits(109))