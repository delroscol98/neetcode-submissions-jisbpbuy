class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [[0, heights[0]]]
        let max = 0

        for (let i = 0; i < heights.length; i++) {
            let curr = heights[i]
            let start = i

            while (stack.length > 0 && curr < stack[stack.length - 1][1]) {
                let [idx, ht] = stack.pop()
                let width = i - idx
                max = Math.max(max, width * ht)
                start = idx
            }

            stack.push([start, curr])
        }

        for (const [idx, ht] of stack) {
            let width = heights.length - idx
            max = Math.max(max, width * ht)
        }

        return max
    }
}
