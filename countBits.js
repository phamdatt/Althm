/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let result = []
    for (let i = 0; i <= n; i++) {
        let count = 0
        let binaryContinous = i.toString(2)
        for (let value of binaryContinous) {
            if (value == '1') {
                count++
            }
        }
        result.push(count)
    }
    return result
};

console.log(countBits(2))

console.log(2^10)
console.log(2^2)
console.log(2^5)
console.log(2^0)
console.log(1^10)
console.log(1^2)
console.log(1^5)
console.log(1^0)
console.log(3^10)
console.log(3^2)
console.log(3^5)
console.log(3^0)

console.log(
    8^
    0 ^
    7 ^
    2 ^
    11 ^
    3 ^
    4 ^
    1 ^
    9 ^
    1 ^
    6 ^
    3)