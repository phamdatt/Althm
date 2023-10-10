/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function longestArray(nums, k) {
    let maxl = 0;
    for (let i = 0; i < nums.length; i++) {
        let sum1 = 0;
        for (let j = i; j < nums.length; j++) {
            sum1 += nums[j];
            if (sum1 % k === 0) {
                maxl = Math.max(maxl, j - i + 1);
            }
        }
    }
    return maxl;
}

console.log(longestArray([2, 7, 6, 1, 4, 5], 3))
