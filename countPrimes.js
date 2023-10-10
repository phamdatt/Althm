/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) {
    let count = 0
    for (let i = 0; i < n; i++) {
        if (isPrime(i)) {
            count++
        }
    }
    return count
};
console.log(countPrimes(10000))
