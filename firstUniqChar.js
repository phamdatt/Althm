/**
 * @param {string} s
 * @return {number}
 */


var firstUniqChar = function (s) {
    // let map = {}
    // let str = ''
    // for (value of s) {
    //     if (map[value]) {
    //         map[value] = map[value] + 1
    //     } else {
    //         map[value] = 1
    //     }
    // }
    // let result = Object.entries(map).filter((item) => item[1] == 1)
    // if (result.length == 0) return -1
    // str = result[0][0]
    // return s.search(str)

    let map = {}

    for (let char of s) {
        map[char] ? map[char]++ : map[char] = 1
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i
    }

    return -1
};

console.log(firstUniqChar("aadadaad"))