/**
 * @param {number} n
 * @return {number}
 */
// var sumOfMultiples = function (n) {
//     let result = new Set()
//     let sum = 0
//     let i = 3;
//     let arr = [3, 5, 7]
//     while (i <= n) {
//         arr.find((item) => {
//             if (i % item === 0) {
//                 result.add(i)
//             }
//         })
//         i++
//     }
//     result.forEach((item) => {
//         sum += item
//     })
//     return sum
// };

// var sumOfMultiples = function (n) {
//     let i = 3
//     let arr = [3, 5, 7]
//     let hash = new Map()
//     let sum = 0
//     while (i <= n) {
//         arr.find((item) => {
//             if (i % item === 0) {
//                 if (!hash.get(i)) {
//                     sum += i
//                     hash.set(i, sum)
//                 }
//             }
//         })
//         i++
//     }
//     let lastKey = [...hash.keys()].pop();
//     return hash.get(lastKey)
// }
var sumOfMultiples = function (n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        if (
            i % 3 == 0 || //
            i % 5 == 0 ||
            i % 7 == 0
        ) {
            sum += i;
        }
    }
    return sum
}
module.exports = sumOfMultiples;

