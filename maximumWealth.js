/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let result = []
    for (let i = 0; i < accounts.length; i++) {
        let k = 0
        let sum = 0
        while (k < accounts[i].length) {
            sum += accounts[i][k]
            k++
        }
        result.push(sum)
    }
    let sorted = result.sort((a, b) => a - b)
    return sorted[accounts.length - 1]
};

maximumWealth([[1, 5], [7, 3], [3, 5]])