class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let total = 0

        for (let i = 0; i < height.length; i++) {
            let maxL = 0
            let maxR = 0

            for (let l = i; l > -1; l--) {
                maxL = Math.max(maxL, height[l])
            }

            for (let r = i; r < height.length; r++) {
                maxR = Math.max(maxR, height[r])
            }

            let water = Math.min(maxL, maxR) - height[i]
            if (water < 0) {
                water = 0
            }
            total += water
        }

        return total
    }
}
