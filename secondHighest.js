/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    // s = s.replace(/[a-z]/g, "")
    // let sPlit = s.split("").sort((a, b) => a - b)
    // console.log(sPlit)
    // let min = Number(sPlit[0])
    // for (let i = 1; i < sPlit.length; i++) {
    //     if (sPlit[i] > min) return sPlit[i]
    // }
    // return -
    const set = new Set(s.replace(/[^0-9]/g, ""));
    return +(Array.from(set).sort().at(-2) ?? "-1");
};

console.log(secondHighest("dfa12321afd"))