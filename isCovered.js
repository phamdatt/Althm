/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
    const numsSet = new Set();
    for (const [start, end] of ranges) {
        for (let i = start; i <= end; i++) {
            numsSet.add(i);
        }
    }
    for (let i = left; i <= right; i++) {
        if (!numsSet.has(i)) {
            return false;
        }
    }

    return true;
};

console.log(isCovered([[1,50]], 1, 50))
