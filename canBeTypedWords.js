/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    // const words = text.split(" ");
    // const canType = [...brokenLetters].reduce((typable, letter) =>
    //   typable.filter(word => !word.includes(letter)),
    //   words
    // );
    // return canType.length;

    let regexp = "[" + brokenLetters + "]\+"
    let word = text.split(" "), count = 0;
    for (let i = 0; i < word.length; i++) {
        let work = true;
        // if matches, means word[i] contains malfunction letters.
        if (word[i].match(regexp)) { work = false };
        if (work) { count++ };
    }
    return count;
}
console.log(canBeTypedWords("hello world", "ad"))
