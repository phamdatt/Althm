/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    if (nums.length == 1) {
        return nums
    }
    let map = new Map()
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    for ([key, value] of map) {
        if (value > nums.length / 3) {
            result.push(key)
        }
    }
    return result
};

console.log(majorityElement([3, 2, 3]))