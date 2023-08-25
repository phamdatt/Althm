/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let result = []
    for (let i = 0; i < nums.length; i += 2) {
        let pilot = 0;
        while (pilot < nums[i]) {
            result.push(nums[i + 1])
            pilot++
        }
    }
    return result
};

decompressRLElist([42, 39])

//Input: nums = [1,2,3,4]
//Output: [2,4,4,4]
