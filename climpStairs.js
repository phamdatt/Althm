var climbStairs = function (n) {
    let memo = {};  // for memoization
    const rec = (n) => {
        // base case when n=1 || n=2
        if (n === 1 || n === 2) {
            console.log("n1",n)
            return n;
        }
        // if we have already calculated the value return it
        else if (memo[n]) {
            return memo[n];
        } else {
            // calculate and store the value to be used again
            memo[n] = rec(n - 1) + rec(n - 2);
            return memo[n];
        }
    }
    const ans = rec(n);
    return ans;
};
climbStairs(4)