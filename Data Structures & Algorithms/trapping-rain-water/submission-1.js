class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0
        let r = height.length - 1

        let maxL = 0
        let maxR = 0

        let water = 0

        while (l <= r) {
            let amt = 0
            if (maxL <= maxR) {
                amt = maxL - height[l]
                maxL = Math.max(maxL, height[l])
                l++
            } else {
                amt = maxR - height[r]
                maxR = Math.max(maxR, height[r])
                r--
            }
            if (amt < 0) {
                amt = 0
            }

            water += amt
        }

        return water
    }
}
