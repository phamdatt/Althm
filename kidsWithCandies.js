/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let sorted = candies.slice().sort((a, b) => a - b)
    let kidHaveCandiesLargest = sorted[candies.length - 1]
    return candies.map((item) => item + extraCandies >= kidHaveCandiesLargest ? true : false)
};

console.log(kidsWithCandies([1, 10, 10, 3], 1))