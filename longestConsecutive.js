/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set();
    for (const n of nums) {
        set.add(n);
    }
    let max = 0;
    for (let n of set) {
        if (!set.has(n - 1)) {
            let count = 0;
            while (set.has(n++)) {
                count++;
            }
            max = Math.max(count, max);
        }
    }
    return max;
};

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])