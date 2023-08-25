/**
     Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

    answer.length == nums.length.
    answer[i] = |leftSum[i] - rightSum[i]|.
    Where:

    leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
    rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
    Return the array answer.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

function sum(nums) {
   if (nums.length === 0) {
      return 0;
   }
   let sum = 0;
   for (let i = 0; i < nums.length; i++) {
      sum += nums[i];
   }
   return sum
};
var leftRightDifference = function (nums) {
   let result = []
   for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
         let left = sum([])
         let right = sum(nums.slice(1, nums.length))
         result.push(Math.abs(left - right))
      } else {
         let left = sum(nums.slice(0, i + 1))
         let right = sum(nums.slice(i, nums.length))
         result.push(Math.abs(left - right))
      }
   }
   return result
};

leftRightDifference([10, 4, 8, 3])