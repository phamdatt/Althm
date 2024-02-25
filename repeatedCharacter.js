/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let map = new Map()
    for (value of s) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
           return value
        } else {
            map.set(value, 1)
        }
    }
    return ''
};

console.log(repeatedCharacter("abccbaacz"))