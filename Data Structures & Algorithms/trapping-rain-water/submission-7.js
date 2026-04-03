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
            let water
            if (maxL < maxR) {
                l++
                maxL = Math.max(maxL, height[l])
                water = maxL - height[l]
            } else {
                r--
                maxR = Math.max(maxR, height[r])
                water = maxR - height[r]
            }
            if (water < 0) {
                continue
            }

            total += water
        }

        return total
    }
}
