/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let r = 0;
    for (let i = 0; i < s.length; i++) {
        r ^= s.charCodeAt(i);
    }
    for (let i = 0; i < t.length; i++) {
        r ^= t.charCodeAt(i);
    }
    return String.fromCharCode(r);
};
console.log(findTheDifference("abcd", "abcde"))