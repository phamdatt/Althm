/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    // let map = new Map()
    // for (value of nums) {
    //     if (map.has(value)) {
    //         map.delete(value)
    //     } else {
    //         map.set(value, value)
    //     }
    // }
    // return [...map].map((item) => item[0]);
    let xor = 
    0;

    for (let num of nums) xor ^= num;

    let rightMostBit = xor & ~(xor - 1);
    let x = 0, y = 0;

    for (let num of nums)

        if ((rightMostBit & num) !== 0) x ^= num // XOR because the duplicate will cancel out 
        else y ^= num;


    return [x, y]
};
console.log(singleNumber([1, 2, 1, 3, 2, 5]
))
// 0101
// 0001
// 0100