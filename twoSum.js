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

    // Approach with Two Pointer that notice arr always sorted
    // Time complexity: O(N)
    //Space 0(N)
    // let result = []
    // let start = 0;
    // let end = nums.length - 1;
    // while (start < end) {
    //     if (nums[start] + nums[end] == target) {
    //         result.push(start, end)
    //         return result
    //     }
    //     if (nums[start] + nums[end] > target) {
    //         end--
    //     }
    //     if (nums[start] + nums[end] < target) {
    //         start++
    //     }
    // }
    // return result
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const remain = target - nums[i]
        if (map.has(remain)) {
            return [map.get(remain), i]
        } else {
            map.set(nums[i], i)
        }
    }
    return []
}
console.log(twoSum([3, 2, 4], 6))
//[1,2]
//input [1,2,5,7,8,9,10], target = 13
//output [2,4]