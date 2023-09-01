/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let newStr = key.replace(/\s/g, "")
    let hash = new Map()
    
    for (let i = 0; i < newStr.length; i++) {
        let charCode = 97 + i;
        let charValue = String.fromCharCode(charCode);
        console.log(charValue)
        hash.set(newStr[i], charValue)
    }
    let newMess = message.replace(/\s/g, "")
    let str = ''
    for (let i = 0; i < newMess.length; i++) {
        str += hash.get(newMess[i])
    }
    // console.log(hash)
    // console.log(str)
};
decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")
// Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
// Output: "this is a secret"
