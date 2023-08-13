var shuffle = function (nums, n) {
    let last = nums.slice(n, nums.length)
    let result = []
    for (let i = 0; i < last.length; i++) {
        result.push(nums[i])
        result.push(last[i])
    }
    return result
};

shuffle([2, 5, 1, 3, 4, 7], 3)
//out put -> [2,3,5,4,1,7]