/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let map = {}
    for (value of nums) {
        if (map[value]) {
            map[value] = map[value] + 1
        } else {
            map[value] = 1
        }
    }
    return nums.sort((a, b) => {
        return map[a] === map[b] ? b - a : map[a] - map[b]
    });
};
console.log(
    frequencySort([1, 1, 2, 2, 2, 3]))