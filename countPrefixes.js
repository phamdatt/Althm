/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
    let set = new Set()
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let strCut = s.slice(0, i + 1)
        set.add(strCut)
    }
    for (value of words) {
        if (set.has(value)) {
            count++
        }
    }
    return count
};

countPrefixes(["a", "a"], s = "aa")