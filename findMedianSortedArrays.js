/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

    The overall run time complexity should be O(log (m+n)).

    

    Example 1:

    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.
    Example 2:

    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (!nums1.length && !nums2.length) return 0
    let pos1 = 0
    let pos2 = 0
    let middle = [] // middle positions
    let middleNums = [] // middle numbers
    // determine middle position (positions)
    if ((nums1.length + nums2.length) / 2 % 1) middle = [Math.trunc((nums1.length + nums2.length) / 2)]
    else middle = [(nums1.length + nums2.length) / 2 - 1, (nums1.length + nums2.length) / 2]
    for (let i = 0; i <= middle[middle.length - 1]; i++) {
        let newNum
        if (nums1[pos1] !== undefined && nums2[pos2] !== undefined) {
            if (nums1[pos1] < nums2[pos2]) {
                newNum = nums1[pos1]
                pos1++
            } else {
                newNum = nums2[pos2]
                pos2++
            }
        } else {
            if (nums1[pos1] === undefined) {
                newNum = nums2[pos2]
                pos2++
            } else {
                newNum = nums1[pos1]
                pos1++
            }
        }
        if (i === middle[0]) middleNums.push(newNum)
        if (middle[1] !== undefined && i === middle[1]) middleNums.push(newNum)
    }
    if (middleNums.length === 2) return (middleNums[0] + middleNums[1]) / 2
    else return middleNums[0]
};