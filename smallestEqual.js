/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i % 10 === nums[i]) return i
    }
    return -1
};

smallestEqual([4, 5, 6, 9, 9, 5, 9, 0, 8])