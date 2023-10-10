/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        const curr = Math.abs(nums[i]);
        if (nums[curr - 1] > 0) {
            nums[curr - 1] *= -1;
        }
    }

    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            nums[idx] = i + 1;
            idx++;
        }
    }
    return nums.slice(0, idx);
};
//[4,3,2,7,8,2,3,1]
//[5,6]