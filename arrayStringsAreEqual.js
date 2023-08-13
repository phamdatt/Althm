/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    return word1.toString().replace(/,/g,"") === word2.toString().replace(/,/g,"")
};

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]))