/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {
    let map = new Map()
    let count = 0
    for (value of nums) {
        if (map.has(value)) {
            map.delete(value)
            count++
        } else {
            map.set(value, 1)
        }
    }
    return [count, map.size]
};
console.log(numberOfPairs([0]))

