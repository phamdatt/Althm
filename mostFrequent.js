/**
 * @param {number[]} nums
 * @returns {number}
 */

const excute = require('./excute.js')

function maxFreq(arr, n) {
    //using moore's voting algorithm
    var res = 0;
    var count = 1;
    for (var i = 1; i < n; i++) {
        if (arr[i] === arr[res]) {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            res = i;
            count = 1;
        }
    }

    return arr[res];
}
function mostFrequent(nums) {
    //Approach with brute force
    //Time complexity: 0(N^2)
    //Space complexity: O(1)
    /* Start */
    // let candiate = 0
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //             candiate = nums[i]
    //         }
    //     }
    // }
    // return candiate
    /* End */

    //Approach with hashing
    //Time complexity: 0(N)
    //Space complexity: O(N)
    /* Start */
    // let map = new Map()
    // let candiate = 0
    // for (let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         candiate = nums[i]
    //     } else {
    //         map.set(nums[i], nums[i])
    //     }
    // }
    // return candiate
    /* End */

    //Approach with Moore’s voting Algorithm.
    //Time complexity: 0(N)
    //Space complexity: O(1)
    //Note: The above voting algorithm only works when the maximum occrring element is more than length / 2 times

    var freq = maxFreq(nums, nums.length);
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === freq) {
            count++;
        }
    }
    return count
}

excute(mostFrequent([40, 50, 30, 40, 50, 30, 30]))
