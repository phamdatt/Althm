/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let max = num
    let str = num.toString().split("")
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '9') {
            str[i] = '6'
            max = Math.max(max, Number(str.join("")))
            str[i] = '9'
        }
        if (str[i] == '6') {
            str[i] = '9'
            max = Math.max(max, Number(str.join("")))
            str[i] = '6'
        }
    }
    return max
};

console.log(maximum69Number(9669))
let nums = [1,0]
let min = Math.min(...nums.filter((item) => item != 0))
console.log(min)