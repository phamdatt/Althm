/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    let map = new Map();
    let arrSorted = arr.slice().sort((a, b) => a - b);
    let index = 1
    for (value of arrSorted) {
        if (!map.has(value)) {
            map.set(value, index);
            index++
        }
    }
    return arr.map((item) => map.get(item))
};

console.log(arrayRankTransform([40,10,20,30]))