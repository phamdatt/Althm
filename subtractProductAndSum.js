/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    // let sum = 1
    // let total = 0
    // while (n > 0) {
    //     value = n % 10
    //     total += value
    //     sum = (sum * value)
    //     n = n / 10 | 0
    // }
    // return sum - total
    // let sumDigits = Array.from(String(n), Number).reduce((a, b) => a + b, 0)
    // let prodDigits = Array.from(String(n), Number).reduce((a, b) => a * b, 1)

    // return prodDigits - sumDigits
    let sumDigits = 0
    let prodDigits = 1
    let nStr = n.toString()
    for (let i = 0; i < nStr.length; i++) {
        sumDigits += parseInt(nStr[i])
        prodDigits *= parseInt(nStr[i])
    }
    return prodDigits - sumDigits
};

subtractProductAndSum(234)
