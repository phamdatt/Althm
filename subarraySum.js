/**
 *  560. Subarray Sum Equals K
    Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
    A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let currPrefixSum = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        currPrefixSum += nums[i];
        if (map.has(currPrefixSum - k)) {
            count += map.get(currPrefixSum - k);
        }
        map.set(currPrefixSum, (map.get(currPrefixSum) || 0) + 1);
    }
    return count;
};
console.log(subarraySum([1, 2, 1, 2, 1], 3))



