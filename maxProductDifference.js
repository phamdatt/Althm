//1913. Maximum Product Difference Between Two Pairs
/**
 * The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

    For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
    Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

    Return the maximum such product difference.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
    nums.sort((a, b) => a - b);
    return nums.slice(nums.length - 2).reduce((a, b) => a * b, 1) - nums.slice(0, 2).reduce((a, b) => a * b, 1);
};
console.log(maxProductDifference([5, 6, 2, 7, 4]))
// Input: nums = [5,6,2,7,4]
// Output: 34

// 2 4 5 6 7
