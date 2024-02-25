/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    // let map = new Map()
    // let set = new Set(nums1)
    // let set1 = new Set(nums2)
    // let set2 = new Set(nums3)
    // for (value of [...set]) {
    //     map.set(value, 1)
    // }
    // for (value of [...set1]) {
    //     if (map.has(value)) {
    //         map.set(value, map.get(value) + 1)
    //     } else {
    //         map.set(value, 1)
    //     }
    // }
    // for (value of [...set2]) {
    //     if (map.has(value)) {
    //         map.set(value, map.get(value) + 1)
    //     } else {
    //         map.set(value, 1)
    //     }
    // }
    // let result = []
    // for (value of map.entries()) {
    //     if (value[1] == 2 || value[1] == 3) {
    //         result.push(value[0])
    //     }
    // }
    // return result
    let newArr = [];
    newArr.push(...nums1.filter(num => nums2.includes(num) || nums3.includes(num)))
    newArr.push(...nums2.filter(num => nums1.includes(num) || nums3.includes(num)))
    console.log(newArr)
    return Array.from(new Set(newArr))
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]))
