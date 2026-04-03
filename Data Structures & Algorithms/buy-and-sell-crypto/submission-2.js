class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0
        let l = 0
        let r = 0

        while (r < prices.length) {
            if (prices[r] < prices[l]) {
                l = r
            } else {
                max = Math.max(max, prices[r] - prices[l])
                r++
            }
        }

        return max
    }
}
