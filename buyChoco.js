/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    // let arr = []
    // for (let i = 0; i < prices.length; i++) {
    //     if (prices[i] < money) {
    //         arr.push(prices[i])
    //     }
    // }
    // if (arr.length == 1 || arr.length == 0) {
    //     return money
    // }

    // let sum = 0

    // arr.sort((a, b) => a - b)
    // for (let i = 0; i < 2; i++) {
    //     sum += arr[i]
    // }
    // return money - sum >= 0 ? money - sum : money
    prices.sort((a, b) => a - b)
    let result = []
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < money && result.length < 2) {
            result.push(prices[i])
        }
    }
    let sum = result.reduce((current, item) => current + item, 0)
    if(result.length == 0 || result.length == 1) {
        return money
    }
    return  money - sum >= 0 ? money - sum : money
};

console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62))