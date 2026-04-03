class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let l = 0
        let r = heights.length - 1

        while (l < r) {
            let width = r - l
            let height = Math.min(heights[l], heights[r])
            max = Math.max(max, width * height)

            if (heights[l] < heights[r]) {
                l++
            } else {
                r--
            }
        }

        return max
    }
}
