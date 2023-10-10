/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    // let i = 0
    // let j = 0
    // let s = ""
    // while (i < word1.length && j < word2.length) {
    //     s += word1[i] + word2[j]
    //     i++
    //     j++
    // }
    // while (i < word1.length) {
    //     s += word1[i]
    //     i++
    // }
    // while (j < word2.length) {
    //     s += word2[j]
    //     j++
    // }
    // console.log(s)

    // Approach 2 
    // Time: O(Max(M,N))
    let result = [];
    let maxLength = Math.max(word1.length, word2.length);

    for (let i = 0; i < maxLength; i++) {
        if (word1[i]) result.push(word1[i])
        if (word2[i]) result.push(word2[i])
    }

    return result.join('')

};

mergeAlternately("ab", "pqrs")