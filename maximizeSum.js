/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    // let pilot = 0;
    // let sum = 0
    // nums = nums.sort((a, b) => a - b)
    // while (pilot < k) {
    //     sum += nums[nums.length - 1]
    //     nums.splice(nums.length - 1, 1, nums[nums.length - 1] + 1)
    //     pilot++
    // }
    // return sum
    let max = Math.max(...nums);
    let sum = 0;
    for (let i = 0; i < k; i++) {
        console.log(max)
        sum += max;
        max += 1;
    }
    return sum;
};
maximizeSum([4, 4, 9, 10, 10, 9, 3, 8, 4, 2, 5, 3, 8, 6, 1, 10, 4, 5, 3, 2, 3, 9, 5, 7, 10, 4, 9, 10, 1, 10, 4], 6)