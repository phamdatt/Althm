function cost(a, n) {
    let min = a[0];

    // find the minimum using 
    // for loop 
    for (let i = 1; i < a.length; i++) {
        if (a[i] < min)
            min = a[i];
    }

    // Minimum cost is n-1 multiplied 
    // with minimum element. 
    return (n - 1) * min;
}
console.log(cost([4, 3, 2], 3))

