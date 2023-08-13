var fib = function (n) {
    let memo = {}
    const nect = (n) => {
        if (n == 0 || n == 1) {
            return n
        }else {
            memo[n]= nect(n-1) + nect(n-2)
            return memo[n]
        }
    }
    const ans = nect(n)
    return ans
};
fib(2)