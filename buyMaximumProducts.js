

// javascript program to find maximum number of stocks that
// can be bought with given constraints.
function buyMaximumProducts(n, k, price) {
    let v = [];

    // Making pair of product cost and number
    // of day..
    for (let i = 0; i < n; ++i) {
        v.push([price[i], i + 1]);
    }
    // Sorting the vector pair.
    v.sort((a, b) => a[0] - b[0]);

    // Calculating the maximum number of stock
    // count.
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans += Math.min(v[i][1], Math.floor(k / v[i][0]));
        k -= v[i][0] * Math.min(v[i][1], Math.floor(k / v[i][0]));
    }

    return ans;
}

let price = [10, 7, 19];
let n = price.length;
let k = 45;

console.log(buyMaximumProducts(n, k, price));
