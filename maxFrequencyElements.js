/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    obj = {}

    for (num of nums) {
        obj[num] = obj[num] ? obj[num] + 1 : 1
    }

    arr = Object.keys(obj).map((key) => obj[key])
    arr = arr.filter((x) => x === Math.max(...arr))

    return arr.length * arr[0]
};

console.log(maxFrequencyElements([17, 17, 17, 1, 3, 4]))
