/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    // let sum = 0, N = arr.length;
    // for (let i = 0; i < arr.length; i++) {
    //     // Firstly we find how much time we use current number
    //     let total = Math.ceil(((i + 1) * (N - i)) / 2);
    //     console.log(total)
    //     // And multiply it with that number
    //     sum += total * arr[i];
    // }
    // return sum;

    // if (!arr.length)
    //     return 0
    // let sum = 0
    // const findSum = (first, last) => {
    //     let sum = 0
    //     for (let i = first; i <= last; i++)
    //         sum += arr[i]
    //     return sum
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; (j + i) < arr.length; j = j + 2)
    //         sum += findSum(i, i + j)
    // }
    // return sum
    var sum = 0;
    var n = arr.length
    for (var i = 0; i < arr.length; i++) {
        var s = n - i; // number of subarrays start with arr[i]
        var e = i + 1; // number of subarrays end with arr[i];
        // so the total subarray which include arr[i] is s*e
        // so half of the sub arrays are odd so we devide it by two
        // we multiply the number of occurence of the element in odd sub arrays with the element
        sum += ((Math.ceil((s * e) / 2)) * arr[i])
    }
    return sum;
};

console.log(sumOddLengthSubarrays([1, 2, 1, 2]))

// 0
//sum = 0
//1
// sum = 
