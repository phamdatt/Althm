/**
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:

x if x >= 0.
-x if x < 0
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    // let count = 0
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (Math.abs(nums[i] - nums[j]) === k && (i < j)) {
    //             count++
    //         }
    //     }
    // }
    // return count

    //case 2

    const hash = {};
    let count = 0;
    for (let n of nums) {
        if (hash[n]) count += hash[n];
        hash[n - k] ? hash[n - k] += 1 : hash[n - k] = 1;
        hash[n + k] ? hash[n + k] += 1 : hash[n + k] = 1;
    }

    return count;
};

countKDifference([1, 2, 2, 1], 1)

//output : 4