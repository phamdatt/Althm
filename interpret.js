/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    // command.replace(/\(\)/g,'o').replace(/\(al\)/g , "al");
    return command.split("()").join("o").split("(al)").join("al");
};

console.log(interpret("(al)G(al)()()G"))

