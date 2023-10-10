/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let map = new Map()
    let sum = 0
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
            sum = map.get(s[i])
        } else {
            map.set(s[i], 1)
        }
    }

    let bool = true
    for ([index, count] of map) {
        if (count != sum) {
            bool = false
        }
    }
    return bool
};

areOccurrencesEqual("abacbc")

