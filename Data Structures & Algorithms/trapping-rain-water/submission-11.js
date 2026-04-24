class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxL = new Array(height.length).fill(0)
        maxL[0] = height[0]
        for (let i = 1; i < maxL.length; i++) {
            maxL[i] = Math.max(maxL[i - 1], height[i])
        }

        let maxR = new Array(height.length).fill(0)
        maxR[maxR.length - 1] = height[height.length - 1]
        for (let i = maxR.length - 2; i > - 1; i--) {
            maxR[i] = Math.max(maxR[i + 1], height[i])
        }

        let total = 0
        for (let i = 0; i < height.length; i++) {
            let h = Math.min(maxL[i], maxR[i])
            let water = h - height[i]
            if (water <= 0) {
                water = 0
            }

            total += water
        }

        return total
    }
}
