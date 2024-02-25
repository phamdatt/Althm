/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let map = new Map()
    let set = new Set(key.replace(/\s/g, ""))
    for (let i = 0; i < set.size; i++) {
        let charCode = 97 + i;
        map.set([...set][i], String.fromCharCode(charCode))
    }
    let str = ""
    for (let i = 0; i < message.length; i++) {
        str += map.get(message[i])
    }
    return str.replace(/undefined/g, " ")
};
console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"))
