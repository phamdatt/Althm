var buildArray = function (nums) {
    let result = nums.map((item, index) => {
        return nums[index]
    });
    return result.map((item) => {
        return nums[item]
    })
};

buildArray([0, 2, 1, 5, 3, 4])
// output [0,1,2,4,5,3]