/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // Do not return anything just modify nums1
    nums1.splice(m, n + 1, ...nums2)
    nums1 = nums1.sort((a, b) => a - b)
    console.log(nums1)
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 2)
//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Output: [1,2,2,3,5,6]