/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let count = 0;
    for (let i = 0; i < patterns.length; i++) {
        let regex = new RegExp(patterns[i]);
        if (regex.test(word)) {
            count++;
        }
    }
    return count;
};

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"))
