/**
 * 
 * @param {number[]} nums 
 * @param {number} target
 * @returns  {number[]}
 */

function twoSum(nums, target) {
    // Approach with Brute Force
    // Time complexity: O(N^2)
    //Space 0(N)
    // let result = []
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             result.push(i, j)
    //             return result
    //         }
    //     }
    // }
    // return result

    // let map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     const remain = target - nums[i]
    //     if (map.has(remain)) {
    //         return [map.get(remain), i]
    //     } else {
    //         map.set(nums[i], i)
    //     }
    // }
    // return []

    // Two pass
    // Time complexity : 0N
    // Space complexity: 0N
}
console.log(twoSum([3, 2, 4], 6))
//[1,2]
//input [1,2,5,7,8,9,10], target = 13
//output [2,4]