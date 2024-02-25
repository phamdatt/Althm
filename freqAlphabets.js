/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let map = new Map()
    let result = ''
    for (let i = 0; i < 26; i++) {
        if (i < 9) {
            map.set(i + 1, String.fromCharCode(97 + i))
        } else {
            map.set(i + 1 + '#', String.fromCharCode(97 + i))
        }
    }
};

freqAlphabets("10#11#12")
