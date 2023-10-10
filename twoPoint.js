// Merge array

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function mergeTwoArr(nums1, nums2) {
    // let arr = [...nums1, ...nums2]
    // arr = arr.sort((a, b) => a - b)
    // console.log(arr)
    let i = 0;
    let j = 0;
    let arr = []
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            arr.push(nums1[i])
            ++i
        } else {
            arr.push(nums2[j])
            j++
        }
    }
    while (i < nums1.length) {
        arr.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        arr.push(nums2[j]);
        j++;
    }
    console.log(arr)
}
mergeTwoArr([1, 6, 9, 13, 18, 18], [2, 3, 8, 13, 15, 21, 25])

// Input arr = [1,6,9,13,18,18], arr2 = [2,3,8,13,15,21,25]
//output [1,2,3,6,8,9,13,13,18,18,21,25]