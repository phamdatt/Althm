/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    // Approach using Hash Map
    //Time complexity : 0(N)
    //Space complexity : 0(N)

    // let map = new Map()
    // let item = 0
    // for ([index, num] of nums.entries()) {
    //     if (map.has(num)) {
    //         item = num
    //     } else {
    //         map.set(num, index)
    //     }
    // }
    // return item

    // Approach using sorting
    // Time: O(N+LogN)
    // Space: O(N)

    // let numSorteds = nums.slice().sort((a, b) => a - b)
    // for ([index, num] of numSorteds.entries()) {
    //     if (numSorteds[index] === numSorteds[index + 1]) {
    //         return num
    //     }
    // }
    // return 0    let slow = 0;
    let fast = 0;
    let slow = 0;
    // Phase 1: Find intersection point of Tortoise and Hare
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Phase 2: Find entrance to the cycle
    let slow2 = 0;
    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;
};
console.log(
    findDuplicate([1, 3, 4, 2, 2]))

console.log(11 / 2)