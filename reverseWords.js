/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let str = ""
    let arrstr = s.split(" ")
    for (let i = 0; i < arrstr.length; i++) {
        str += arrstr[i].split("").reverse().join("") + " "
    }
    return str.trim()
};
reverseWords("Let's take LeetCode contest")