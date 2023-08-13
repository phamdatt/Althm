var moveZeroes = function (nums) {
    // let k = 0;
    // if (nums.length == 1) return nums
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] != 0) {
    //         [nums[i - k], nums[i]] = [nums[i], nums[i - k]]
    //     } else {
    //         k++
    //     }
    // }
    // return nums
    // let zero =[]
    // let unzero =[]

    // for(let i =0;i<nums.length;i++){
    //     nums[i] == 0 ? zero.push(nums[i]):unzero.push(nums[i])
    // }

    // nums.splice(0,nums.length);
    // nums.splice(nums.length,0,...unzero);
    // nums.splice(nums.length,0,...zero);
    // return nums
};
console.log(moveZeroes([0, 1, 0, 3, 12]))