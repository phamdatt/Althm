var majorityElement = function (nums) {
    let candidate;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1
    }

    return candidate;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
//test-case
//[2, 2, 1, 1, 1, 2, 2]
//[3,3,4]


//expected O(1)
//base O(n)