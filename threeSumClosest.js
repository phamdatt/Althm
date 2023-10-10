/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let sum = 0
    for (let i = 0; i < 3; i++) {
        sum += nums[i]
    }
    let max = sum
    let current = 0
    for (let i = 3; i < nums.length; i++) {
        sum += nums[i]
        sum -= nums[current]
        if (target > 0) {
            max = Math.max(max, sum)
        } else {
            max = Math.min(max, sum)
        }
        current = i
    }
    return max
};

console.log(threeSumClosest([4,0,5,-5,3,3,0,-4,-5], -2))