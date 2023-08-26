/**
 * Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    // Create an empty object to store the last index of each number in nums
    let map = {};
    // Iterate through each number in nums
    for (let i = 0; i < nums.length; i++) {
        // If the current number is already in map and its last index is within k distance from current index, return true
        if (map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
            return true;
        }
        // Update the last index of the current number to its current index
        map[nums[i]] = i;
    }
    // Return false if no such pair exists
    return false;
};
containsNearbyDuplicate([1, 2, 3, 1], 3)
// Input: nums = [1,2,3,1], k = 3
// Output: true
