/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
    // let count = 0
    // // let set = new Set(nums);
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (((nums[i] + nums[j]) < target) && i < j) {
    //             count++
    //         }
    //     }
    // }
    // console.log(count)
    let left = 0;
    let right = 1;
    let counter = 0;
    let n = nums.length - 1
    while (left < n) {
        let sum = nums[left] + nums[right];
        if (sum < target) {
            counter++;
        }

        if (right === n) {
            left++;
            right = left + 1;
        } else {
            right++;
        }
    }
    return counter;
};

countPairs([-1, 1, 2, 3, 1], 2)
// Input: nums = [-1,1,2,3,1], target = 2
// Output: 3
