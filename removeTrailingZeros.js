/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
    // if (num.slice(num.length - 1) != '0') {
    //     return num
    // }
    // return removeTrailingZeros(num.slice(0, num.length - 1))
    return num.replace(/0+$/, "")
};

console.log(removeTrailingZeros("51230100"))
console.log("G()(al)".split("("))