class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = new Array(height.length)
        let maxL = 0
        for (let l = 0; l < height.length; l++) {
            maxL = Math.max(maxL, height[l])
            maxLeft[l] = maxL
        }

        let maxRight = new Array(height.length)
        let maxR = 0
        for (let r = height.length - 1; r > -1; r--) {
            maxR = Math.max(maxR, height[r])
            maxRight[r] = maxR
        }

        let min = new Array(height.length)
        for (let i = 0; i < height.length; i++) {
            min[i] = Math.min(maxLeft[i], maxRight[i])
        }

        let total = 0
        for (let j = 0; j < height.length; j++) {
            let water = min[j] - height[j]
            if (water < 0) {
                water = 0
            }

            total += water
        }

        return total
    }
}
