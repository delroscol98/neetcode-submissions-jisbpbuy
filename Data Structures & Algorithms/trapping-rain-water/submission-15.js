class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let len = height.length

        let maxL = new Array(len).fill(0)
        maxL[0] = height[0]
        for (let i = 1; i < len; i++) {
            maxL[i] = Math.max(maxL[i - 1], height[i])
        }

        let maxR = new Array(len).fill(0)
        maxR[len - 1] = height[len - 1]
        for (let i = len - 2; i > -1; i--) {
            maxR[i] = Math.max(maxR[i + 1], height[i])
        }

        let water = new Array(len).fill(0)
        for (let i = 0; i < len; i++) {
            let amount = Math.min(maxL[i], maxR[i]) - height[i]
            if (amount < 0) {
                amount = 0
            }

            water[i] = amount
        }

        let total = 0
        for (let i = 0; i < len; i++) {
            total += water[i]
        }

        return total
    }
}
