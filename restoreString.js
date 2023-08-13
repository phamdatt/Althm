/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    // let hash = new Map()
    // let str = ''
    // for (let i = 0; i < indices.length; i++) {
    //     hash.set(indices[i], s[i])
    // }
    // indices.sort((a,b) => a-b).map((item) => str += hash.get(item))
    // return str
    let newString = [];
    for (let i = 0; i < indices.length; i++) {
        newString[indices[i]] = s[i];
    }
    return newString.join("");
}

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])

//output: leetcode

console.log(Math.floor(6/10),6%10)