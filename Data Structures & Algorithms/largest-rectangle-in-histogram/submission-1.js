class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let maxArea = 0

        for (let i = 0; i < heights.length; i++) {
            let start = i
            while (stack.length && stack[stack.length - 1][1] > heights[i]) {
                let [idx, height] = stack.pop()
                maxArea = Math.max(maxArea, height * (i - idx))
                start = idx
            }
            stack.push([start, heights[i]])
        }

        for (const [idx, height] of stack) {
            let area = height * (heights.length - idx)
            maxArea = Math.max(maxArea, area)
        }

        return maxArea
    }
}
