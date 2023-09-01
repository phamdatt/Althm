/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    // const re = new RegExp(`^[${allowed}]+$`);
    // let count = 0

    // words.forEach(word => {
    //     if (word.match(re)) count++
    // })
    // console.log(count)
    // return count
    // let set = new Set(allowed)

    // let count = 0

    // words.forEach(word => {
    //     let w = new Set(word)
    //     let test = new Set([...set, ...w])
    //     if (set.size === test.size) {
    //         count++
    //     }
    // })
    // console.log(count)
    // return count
    let set = new Set(allowed)
    return words.reduce((a, w) => {
        return w.split('').every(l => set.has(l)) ? ++a : a
    }, 0)
};

// console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]))
console.log(342%10)
