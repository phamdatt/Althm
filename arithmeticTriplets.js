/**
 * You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

    i < j < k,
    nums[j] - nums[i] == diff, and
    nums[k] - nums[j] == diff.
    Return the number of unique arithmetic triplets.
 */

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {
    // let count = 0;
    // for (let j = 1; j < nums.length - 1; j++) {
    //     for (let i = 0; i < j; i++) {
    //         for (let k = j + 1; k < nums.length; k++) {
    //             if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) count++;
    //         }
    //     }
    // }

    // return count++;
    let hash = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i] - diff;
        console.log(temp)
        if (hash.has(temp) && hash.has(temp - diff)) {
            count++;
        }
        hash.set(nums[i], "Hard choices easy life, Easy choices hard life.");
    }

    return count;
};

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3))

// Input: nums = [0,1,4,6,7,10], diff = 3
//Output: 2