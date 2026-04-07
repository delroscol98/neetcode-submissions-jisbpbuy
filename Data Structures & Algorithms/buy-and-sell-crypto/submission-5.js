class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0
        let r = 0
        let max = 0

        while (r < prices.length) {
            if (prices[l] > prices[r]) {
                l = r
            }
            let profit = prices[r] - prices[l]
            max = Math.max(max, profit)
            r++
        }

        return max
    }
}
