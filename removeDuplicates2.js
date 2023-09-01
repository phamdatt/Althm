
// Medium

/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears at least twice. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

    Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
    Return k.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0;
    let count = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j] && count == 2) {
            nums[i] = nums[j];
            count = 0
        }
        count++
        i++
    }
    console.log(nums)
    console.log(i)
    return i;
};

removeDuplicates([1, 1, 1, 2, 2, 3])

// Output: 2, nums = [1,2,_]