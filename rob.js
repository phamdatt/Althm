/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let prev = 0, cur = 0
    nums.forEach(n => {
        cur = Math.max(n + prev, prev = cur)
    })
    return cur
};

// console.log(rob([2, 1, 1, 2]))
// Input: nums = [1,2,3,1]
// Output: 4
