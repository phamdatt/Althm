/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums, k) {
    //Approach with siding algorthm
    //Time: O(N)
    //Space: 0(1)

    let current = 0
    for (let i = 0; i < k; i++) {
        current += nums[i]
    }
    let max = current
    let index = 0
    for (let i = k; i < nums.length; i++) {
        current += nums[i] - nums[index]
        index++
        max = Math.max(max, current)
    }
    return max / k
};

console.log(maximumProduct([1, 12, -5, -6, 50, 3], 4))
