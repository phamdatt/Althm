/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let map = new Map()
    for (value of words) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    }
    const arr = [...map.entries()].sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]));
    return arr.slice(0, k).map(item => item[0]);
}
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3))