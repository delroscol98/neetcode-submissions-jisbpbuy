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

        let max = 0

        while (l < r) {
            let water = 0
            if (maxL <= maxR) {
                l++
                maxL = Math.max(maxL, height[l])
                water = maxL - height[l]
            } else {
                r--
                maxR = Math.max(maxR, height[r])
                water = maxR - height[r]
            }

            if (water < 0) continue
            max += water
        }

        return max
    }
}
