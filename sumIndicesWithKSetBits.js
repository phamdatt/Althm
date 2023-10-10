/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function counts(value) {
    let count = 0
    for (number of value) {
        if (number == '1') {
            count++
        }
    }
    return count
}
var sumIndicesWithKSetBits = function (nums, k) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let binN = i.toString(2)
        if (counts(binN) == k) {
            count += nums[i]
        }
    }
    return count
};
sumIndicesWithKSetBits([5, 10, 1, 5, 2], 1)