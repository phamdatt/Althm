/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
    // let result = []
    // for (let i = 0; i < words.length; i++) {
    //     result.push(words[i].charAt(0))
    // }
    // return result.join("") === s
    let str = ''
    for (let value of words) {
        str += value.charAt(0)
    }
    return str === s
    // return words.length === s.length && words.every((v, i) => v[0] === s[i]);
};

isAcronym(["alice","bob","charlie"], "abc")
// Input: words = ["alice","bob","charlie"], s = "abc"
// Output: true