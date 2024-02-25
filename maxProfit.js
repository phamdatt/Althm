/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // let maxProfit = 0;
    // let minPrice = prices[0];
    // for (let i = 1; i < prices.length; i++) {
    //     const currentPrice = prices[i];
    //     const currentProfit = currentPrice - minPrice;
    //     if (currentProfit > maxProfit) {
    //         maxProfit = currentProfit;
    //     }
    //     if (currentPrice < minPrice) {
    //         minPrice = currentPrice;
    //     }
    // }
    // return maxProfit;
    let buy = prices[0]
    let profitTemp = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i]
        } else if (prices[i] - buy > profitTemp) {
            profitTemp = prices[i] - buy
        }
    }
    return profitTemp
};

console.log(maxProfit([7, 1, 5, 6, 4]))
