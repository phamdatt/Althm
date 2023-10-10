/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */

var sumEvenAfterQueries = function (nums, queries) {
    let result = []
    for ([key, value] of queries) {
        nums[value] = nums[value] + key
        let sum = nums.filter((item) => item % 2 == 0).reduce((a, b) => a + b, 0)
        result.push(sum)
    }
    return result
};

sumEvenAfterQueries([1, 2, 3, 4], [[1, 0], [-3, 1], [-4, 0], [2, 3]])