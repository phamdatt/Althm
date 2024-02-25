/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let map = new Map()
    arr.sort((a, b) => a - b)
    for (value of arr) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    }
    console.log(map)
    let count = 0
    for ([key, value] of map.entries()) {
        if (key == value) {
            count = value
        }
    }
    return count > 0 ? count : -1
};

console.log(findLucky([4, 3, 2, 2, 4, 1, 3, 4, 3]))