/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

var sortPeople = function (names, heights) {
    // let hash = new Map()
    // for (let i = 0; i < names.length; i++) {
    //     hash.set(heights[i], names[i])
    // }
    // let heightSorted = heights.sort((a, b) => b - a)
    // return heightSorted.map((item) => hash.get(item))

    // Approach two
    let finalArray = []
    for (let i = 0; i < names.length; i++) {
        finalArray.push([names[i], heights[i]])
    }
    return finalArray.sort((a, b) => b[1] - a[1]).map((a) => a[0]);
};

// console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]))

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]

// I'm very proud of myself
