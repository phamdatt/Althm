/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    const numMap = new Map();
    for (const num of nums) {
        numMap.has(num) ? numMap.delete(num) : numMap.set(num, true);
    }
    return numMap.size === 0;
};

console.log(divideArray([3, 2, 3, 2, 2, 2]))