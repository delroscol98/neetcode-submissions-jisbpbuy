class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let r = 0
        let maxProfit = 0

        while (r < prices.length) {
            if (prices[r] < prices[l]) {
                l = r
            }
            maxProfit = Math.max(maxProfit, prices[r] - prices[l])
            r++
        }

        return maxProfit
    }
}
