function minAmount(candies, k) {
    let res = 0
    let length = candies.length
    candies.sort((a, b) => b - a)
    for (let i = 0; i < length; i++) {
        res += candies[i]
        length = length - k
    }
    console.log(res)
    return res
}
minAmount([2, 1, 3, 4], 2)


