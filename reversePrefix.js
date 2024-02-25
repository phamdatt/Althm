/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let index = word.search(ch);
    let first = word.slice(0, index + 1)
    return first.split("").reverse().join("") + word.slice(index + 1, word.length)
};

console.log(reversePrefix("abcd", "z"))

