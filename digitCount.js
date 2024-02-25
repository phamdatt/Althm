/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
    // let map = new Map()
    // for (let i = 0; i < num.length; i++) {
    //     if (map.has(num[i])) {
    //         map.set(num[i], map.get(num[i]) + 1)
    //     } else {
    //         map.set(num[i], 1)
    //     }
    // }
    // let str = ""
    // for (let i = 0; i < num.length; i++) {
    //     if (map.has(i.toString())) {
    //         str += map.get(i.toString())
    //     } else {
    //         str += '0'
    //     }
    // }
    // return str === num
    const arr = Array(num.length).fill(0);
    for (const char of num) {
        arr[Number(char)]++;
    }
    return arr.join('') === num;
};

console.log(digitCount("030"))