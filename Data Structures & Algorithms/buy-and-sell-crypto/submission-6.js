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
            let profit = 0

            if (prices[r] < prices[l]) {
                l = r
            }
            max = Math.max(max, prices[r] - prices[l])
            r++
        }

        return max
    }
}
