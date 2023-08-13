// Tinh tong tu 0 -> 5

// function sumZeroToN(num) {
//     if (num == 0) {
//         return 0
//     }
//     return num + sumZeroToN(num - 1)
// }

// console.log(sumZeroToN(5))

// function countDown(num) {
//     if (num > 0) {
//         console.log(num)
//         return countDown(num - 1)
//     }
//     console.log(num)
//     return num
// }

// countDown(5)


// function fib(n) {
//     if (n === 1 || n === 2) {
//         return 1
//     }
//     return fib(n - 1) + fib(n - 2)
// }

// console.log(fib(5))

function factorial(num) {
    if (num == 0) {
        return 1
    }
    return num * factorial(num - 1)
}
console.log(factorial(5))

