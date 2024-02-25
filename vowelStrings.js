/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function isVowelString(str) {
    let s = "aeiou"
    let map = new Map()
    for (value of s) {
        map.set(value, value)
    }
    if (map.has(str.charAt(0)) && map.has(str.slice(str.length - 1))) {
        return 1
    }
    return 0
}

var vowelStrings = function (words, left, right) {
    let count = 0
    while (left <= right) {
        count += isVowelString(words[left])
        left++
    }
    return count
};

console.log(vowelStrings(["are", "amy", "u"], 0, 2))