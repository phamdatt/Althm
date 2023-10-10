/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // Do not return anything just modify nums1
    // nums1.splice(m, n + 1, ...nums2)
    // nums1 = nums1.sort((a, b) => a - b)
    // console.log(nums1)'  let i = 0;
    let i = 0;
    let j = 0;
    let arr = []
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            arr.push(nums1[i])
            ++i
        } else {
            arr.push(nums2[j])
            j++
        }
    }
    while (i < m) {
        arr.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        arr.push(nums2[j]);
        j++;
    }
    nums1.splice(0, nums1.length, ...arr)
};
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 2)
//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Output: [1,2,2,3,5,6]

// i = 2
// 1 2 3 0 0 0

// j = 1
// 2 5 6

// 1 2 2

