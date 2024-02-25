/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
    // let map = new Map()
    // for (value of items1) {
    //     map.set(value[0], value[1])
    // }
    // for (value of items2) {
    //     if (map.has(value[0])) {
    //         map.set(value[0], map.get(value[0]) + value[1])
    //     } else {
    //         map.set(value[0], value[1])
    //     }
    // }
    // return [...map].sort((a, b) => a[0] - b[0])

    const ans = {};

    const items = [...items1, ...items2];

    for (let [v, w] of items) {
        if (ans[v]) {
            ans[v] += w;
        } else {
            ans[v] = w;
        }
    }

    return Object.entries(ans);
};

// console.log(mergeSimilarItems([[1, 1], [4, 5], [3, 8]], [[3, 1], [1, 5]]))
console.log(mergeSimilarItems([[1, 3], [2, 2]], [[7, 1], [2, 2], [1, 4]]))