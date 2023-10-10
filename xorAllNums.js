/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
    let result = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            result.push(nums1[i] ^ nums2[j])
        }
    }
    let i = 0
    let sum = 0
    while(i < result.length) {
        sum^=result[i]
        i++
    }
    return sum
};

console.log(xorAllNums([2, 1, 3], [10, 2, 5, 0]))