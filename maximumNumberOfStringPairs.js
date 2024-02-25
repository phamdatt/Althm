/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    // let count = 0
    // let set = new Set()
    // for (value of words) {
    //     if (set.has(value.split("").reverse().join("")) || set.has(value)) {
    //         count++
    //     } else {
    //         set.add(value)
    //     }
    // }
    // return count
    let num = 0;
    while (words.length) {
        let item = words.shift();
        item = item[1] + item[0];
        if (words.includes(item)) num++;
    }
    return num;
};

console.log(maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]))
