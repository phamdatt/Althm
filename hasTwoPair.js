/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {boolean}
 */
/**
 * Give an array non sorting, find two elements which sum equals to target
 */

const excute = require('./excute.js')
function hasTwoPair(nums, target) {

    //Approach one with brute force
    //Time complexity: O(N^2)
    //Space complexity: O(1)
    /*---------------------- Start ------------------------------ */
    // for (let index = 0; index < nums.length; index++) {
    //     for (let childIndex = index + 1; childIndex < nums.length; childIndex++) {
    //         if ((nums[index] + nums[childIndex]) == target) {
    //             return true
    //         }
    //     }
    // }
    // return false
    /*---------------------- End ------------------------------ */


    // //Approach one with two point
    // //Time complexity: O(NlogN)
    // //Space complexity: O(1)
    // // Required: An array must be sorted non-decreasing order
    // /*---------------------- Start ------------------------------ */
    // let start = 0;
    // let end = nums.length - 1
    // nums.sort((a, b) => a - b) //Time complexity: O(LogN)
    // while (start < end) {
    //     if (nums[start] + nums[end] == target) {
    //         return true
    //     }
    //     if (nums[start] + nums[end] > target) {
    //         end--
    //     }
    //     if (nums[start] + nums[end] < target) {
    //         start++
    //     }
    // }
    // return false
    // /*---------------------- End ------------------------------ */

    // //Approach one with hashing
    // //Time complexity: O(N)
    // //Space complexity: O(N)

    // /*---------------------- Start ------------------------------ */
    // let map = new Map()
    // for (let i = 0; i < nums.length; i++) {
    //     let temp = target - nums[i];
    //     if (map.has(temp)) {
    //         return true
    //     }
    //     map.set(nums[i]);
    // }
    // return false
    // /*---------------------- End ------------------------------ */
    // //Approach one with hashing
    // //Time complexity: O(N)
    // //Space complexity: O(N)

    // //Approach one with set
    // //Time complexity: O(N)
    // //Space complexity: O(N)
    // /*---------------------- Start ------------------------------ */
    // let set = new Set()
    // for (let i = 0; i < nums.length; i++) {
    //     let temp = target - nums[i];
    //     if (set.has(temp)) {
    //         return true
    //     }
    //     set.add(nums[i]);
    // }
    // return false
    // /*---------------------- End ------------------------------ */

    // //Approach one with binary search
    // //Time complexity: O(NLogN)
    // //Space complexity: O(1)
    // /*---------------------- Start ------------------------------ */
    
    // /*---------------------- End ------------------------------ */
}
// hasTwoPair([1, 4, 45, 6, 10, 8], 16);
excute(hasTwoPair([1, 4, 45, 6, 10, 8], 16))