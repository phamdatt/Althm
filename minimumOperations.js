/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    // let count = 0
    // for(let value of nums) {
    //     if(value == 0) {
    //         count++
    //     }
    // }
    // if(count == nums.length) {
    //     return 0
    // }
    // count = 0
    // let min = Math.min(...nums.filter((item) => item != 0))
    // let bool = true
    // while (bool) {
    //     nums.forEach((item, index) => {
    //         if (item == 0) return
    //         nums[index] = item - min
    //     })
    //     min = Math.min(...nums.filter((item) => item != 0))
    //     count++
    //     if(Math.max(...nums) != 0) {
    //         bool = true
    //     }else{
    //         bool = false
    //     }
    // }
    // return count
    let set = new Set(nums);
    if (!set.has(0)) {
        return set.size
    } else {
        if (set.size === 1 && set.has(0)) {
            return 0
        } else {
            return set.size - 1
        }
    }
};

console.log(minimumOperations([5, 3, 2, 1]))