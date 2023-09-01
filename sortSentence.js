/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    // let result = []
    // let arr = s.split(" ")
    // for (let i = 0; i < arr.length; i++) {
    //     let id = Number(arr[i].slice(-1))
    //     result[id] = arr[i].slice(0, arr[i].length - 1)
    // }
    // return result.join(" ").trim()
    // return s.split(' ').sort((a, b) => a[a.length - 1] - b[b.length - 1]).map(x => x.substr(0, x.length - 1)).join(' ');
    let sortingS = s.split(' ').sort((a, b) => a.substr(-1) - b.substr(-1));
    slicingS = sortingS.map(word => word.slice(0, -1));
    console.log(slicingS.join(' '))
    return slicingS.join(' ')
};
sortSentence("is2 sentence4 This1 a3")
