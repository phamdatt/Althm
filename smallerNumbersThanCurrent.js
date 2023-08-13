// function smallerNumbersThanCurrent(nums) {
//     let result = []
//     let count = 0
//     for (let i = 0; i < nums.length; i++) {
//         nums.forEach((item) => {
//             if (item < nums[i]) {
//                 count += 1
//             }
//         })
//         result.push(count)
//         count = 0
//     }
//     return result
// }

function smallerNumbersThanCurrent(nums) {
    let hash = new Map()
    let sorted = nums.slice().sort((a, b) => a - b)
    sorted.forEach((item, index) => hash.has(item) ? null : hash.set(item, index))
    return nums.map((item) => hash.get(item))
}
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))