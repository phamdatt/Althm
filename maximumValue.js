/**
 * @param {string[]} strs
 * @return {number}
 */

var maximumValue = function (strs) {
    var regex = new RegExp("^[0-9]+$");
    let max = 0
    for (value of strs) {
        if (!regex.test(value)) {
            max = Math.max(value.length, max)
        } else {
            max = Math.max(max, value)
        }
    }
    return max
};

console.log(maximumValue(["1", "01", "001", "0001"]))
