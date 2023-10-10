/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    //O(N)
    //O(N)
    // let arr = []
    // for (let i = 1; i <= nums.length; i++) {
    //     arr.push(i)
    // }
    // let set = new Set()
    // let result = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (set.has(nums[i])) {
    //         result.push(nums[i])
    //     } else {
    //         set.add(nums[i])
    //     }
    // }
    // for (value of arr) {
    //     if (!set.has(value)) {
    //         result.push(value)
    //     }
    // }
    // return result

    //O(N)
    //O(1)
    // let N = nums.length, ans = [,]
    // for (let i = 0; i < N; i++)
    //     nums[(nums[i] - 1) % 10000] += 10000
    // for (let i = 0; i < N; i++)
    //     if (nums[i] > 20000) ans[0] = i + 1
    //     else if (nums[i] < 10001) ans[1] = i + 1
    // return ans

    //ON
    //ON
    const arr = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]]++;
    }

    return [arr.indexOf(2), arr.lastIndexOf(0)];
};

// console.log(findErrorNums([1, 2, 2, 4]))
let arr = [3,1,2,4]
arr.splice(0,1)
arr.push(3)
console.log(arr.entries)