/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let arrStr = s.split(" ")
    let res = arrStr.slice(0, k)
    return res.toString().replace(/,/g, " ")
};

truncateSentence("Hello how are you Contestant", 4)