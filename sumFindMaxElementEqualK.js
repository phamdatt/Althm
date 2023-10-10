function sumFindMaxElementEqualK(nums, k) {
    //Time complexity : 0(K*N)
    //Space complexity: O(1)
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    let max = sum
    let current = 0
    for (let i = k; i < nums.length; i++) {
        sum = (sum + nums[i]) - nums[current]
        max = Math.max(max, sum)
        current++
    }
    console.log(max)
}

sumFindMaxElementEqualK([100, 200, 300, 400], 2)