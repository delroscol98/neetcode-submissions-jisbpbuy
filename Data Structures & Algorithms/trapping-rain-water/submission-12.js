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
            maxL[i] = Math.max(height[i], maxL[i - 1])
        }

        let maxR = new Array(len).fill(0)
        maxR[len - 1] = height[len - 1]
        for (let i = len -2; i > -1; i--) {
            maxR[i] = Math.max(height[i], maxR[i + 1])
        }

        let total = 0
        for (let i = 0; i < len; i++) {
            let water = Math.min(maxL[i], maxR[i]) - height[i]
            if (water <= 0) {
                water = 0
            }

            total += water
        }
        return total
    }
}
