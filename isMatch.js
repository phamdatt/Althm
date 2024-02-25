var isMatch = function (s, p) {
    let regexIsSpecialCharacter = /[-\/\\^$*+?.()|[\]{}]/g;

    if (regexIsSpecialCharacter.test(p)) {
        let escapedP = p.replace(regexIsSpecialCharacter, '\\$&');
        let regex = new RegExp(escapedP);
        return regex.test(s);
    }

    return p === s;
};

console.log(isMatch("aa", "a*")); // Output: true
