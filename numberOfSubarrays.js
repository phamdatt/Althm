var numberOfSubarrays = function (nums, k) {
    // const countMap = new Map([[0, 1]]);
    // let current = result = 0;
    // for (value of nums) {
    //     current += value & 1;
    //     result += countMap.get(current - k) ?? 0;
    //     const count = countMap.get(current) ?? 0;
    //     countMap.set(current, count + 1);
    // }
    // return result;
    let odds = 0;
    let count = 0;
    let prefix = 0

    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] % 2 != 0) {
            odds += 1
            prefix = 0
        }

        while (odds == k && i <= j) {
            if (nums[i] % 2 != 0) odds -= 1
            i++
            prefix++

        }

        count += prefix

    }
    return count
};

numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)