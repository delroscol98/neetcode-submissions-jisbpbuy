class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let max = 0
        for (let i = 0; i < heights.length; i++) {
            let start = i
            while (stack.length > 0 && heights[i] < stack[stack.length - 1][1]) {
                let [idx, ht] = stack.pop()
                let width = i - idx
                max = Math.max(max, width * ht)
                start = idx
            }
            stack.push([start, heights[i]])
        }

        for (const [idx, ht] of stack) {
            let width = heights.length - idx
            max = Math.max(max, width * ht)
        }
        return max
    }
}
