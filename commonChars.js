/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
    let length = words.length
    let str = words.join("")
    let map = new Map()
    for (value of str) {
        if (map.has(value)) {
            map.set(value, map.get(value) + 1)
        } else {
            map.set(value, 1)
        }
    }
    console.log(map)
};
console.log(commonChars(["cool","lock","cook"]))

console.log("abc".slice(0,3))