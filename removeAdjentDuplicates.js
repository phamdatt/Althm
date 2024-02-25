/**
 * @param {string} s
 * @return {string}
 */
var removeAdjentDuplicates = function (s) {
    // const regex = /(\w)\1/g;
    // let result = s;

    // while (regex.test(result)) {
    //     result = result.replace(regex, '');
    // }

    // return result;
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.join('');
};
console.log(removeAdjentDuplicates("aababaab"))

