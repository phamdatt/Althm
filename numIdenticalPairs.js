
/**
 * @param {number[]} nums
 * @return {number}
 */
// var numIdenticalPairs = function (nums) {
//     let k = 0;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] == nums[j]) {
//                 k++
//             }
//         }
//     }
//     return k
// };

var numIdenticalPairs = function (nums) {
    let goodPair = 0
    let map = {}
    for (let num of nums) {
        if (map[num]) {
            goodPair += map[num]
            map[num]++
        } else {
            map[num] = 1
        }
    }
    return goodPair
}
numIdenticalPairs([1, 2, 3, 1, 1, 3])

//output:4

