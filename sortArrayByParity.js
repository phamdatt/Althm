/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    // if (nums.length === 1) return nums
    // let arr = []
    // for ([index, value] of nums.entries()) {
    //     if (value % 2 == 0) {
    //         arr.unshift(value)
    //     } else {
    //         arr.push(value)
    //     }
    // }
    // return arr
    return nums.sort(a=>a&1?1:-1)
};
console.log(sortArrayByParity([3, 1, 2, 4]))