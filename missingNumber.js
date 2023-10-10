
function missingNumber(array, n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum - array.reduce((acc, item) => acc + item, 0)
}

console.log(missingNumber([1, 2, 3, 5], 5))