class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = -Infinity

        for (let i = 0; i < heights.length; i++) {
            for (let j = i + 1; j < heights.length; j++) {
                let width = j - i
                let height = Math.min(heights[i], heights[j])
                let area = width * height

                if (area > max) {
                    max = area
                }
            }
        }

        return max
    }
}
