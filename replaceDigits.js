/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    let result = ''
    let charCode = 97
    for (let i = 0; i < s.length; i++) {
        if (isNaN(Number(s[i]))) {
            result += s[i]
            charCode = s[i].charCodeAt()
        } else {
            result += String.fromCharCode(charCode + Number(s[i]))
        }
    }
    return result
};

console.log(replaceDigits("v0g6s4d"))
var regex = new RegExp("^[0-9]+$");

console.log(regex.test('alic3'))