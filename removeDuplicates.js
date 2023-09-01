/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

    Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    Return k.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // let count = 0;
    // let pilot = 0
    // let result = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[pilot] != nums[i + 1]) {
    //         result.unshift(nums[i])
    //         count++
    //         pilot++
    //     } else {
    //         pilot++
    //         result.push("_")
    //     }
    // }
    // result = result.sort((a, b) => a - b)
    // for (let i = 0; i < result.length; i++) {
    //     nums.splice(i, i, result[i])
    // }
    // console.log(nums)
    // return count
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};

removeDuplicates([-3, -1, 0, 0, 0, 3, 3])
