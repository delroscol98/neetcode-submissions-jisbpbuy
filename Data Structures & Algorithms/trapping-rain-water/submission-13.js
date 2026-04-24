class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0
        let r = height.length - 1
        let maxL = height[l]
        let maxR = height[r]
        let total = 0

        while (l < r) {
            let water = 0
            if (maxL <= maxR) {
                water = maxL - height[l]
                l++
                maxL = Math.max(maxL, height[l])
            } else {
                water = maxR - height[r]
                r--
                maxR = Math.max(maxR, height[r])
            }

            if (water <= 0) {
                water = 0
            }

            total += water
        }

        return total
    }
}
