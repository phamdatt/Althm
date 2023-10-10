// /**
//  * @param {number} n
//  * @return {number[]}
//  */
// var evenOddBit = function (n) {
//     let binaryContinous = n.toString(2).split("").reverse()
//     let countEven = 0
//     let countOdd = 0
//     let result = []
//     for (let i = 0; i < binaryContinous.length; i++) {
//         if (binaryContinous[i] == 1) {
//             if (i % 2 == 0) countEven++;
//             else countOdd++;
//           }
//     }
//     result.push(countEven, countOdd)
//     return result
// };
// console.log(
//     evenOddBit(2))

const evenOddBit = function (n) {
    let even = 0;
    let odd = 0;
    let i = 0;

    while (n > 0) {
        if (n & 1) { // "if n is an odd number"
            if (i % 2 === 0) { // can also write `if (!(i & 1))`
                even++;
            } else {
                odd++;
            }
        }

        i++;
        n >>= 1; // remove one bit from `n`, i.e. shift it by one bit
    }

    return [even, odd];
};

console.log(evenOddBit(2))
console.log("Hoang Thi Thu Hien".split(" ").slice(-1).join(""))