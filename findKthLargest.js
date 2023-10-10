/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (nums.length == 1) return nums[0]
    let max = Math.max(...nums)
    if (k === 1) return max
};
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))