class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let max = 0

        for (let i = 0; i < heights.length; i++) {
            let curr = heights[i]
            let start = i

            while (stack.length > 0 && curr < stack[stack.length - 1][1]) {
                let [idx, height] = stack.pop()
                let width = i - idx
                max = Math.max(max, width * height)
                start = idx
            }

            stack.push([start, curr])
        }

        while (stack.length > 0) {
            let [idx, height] = stack.pop()
            let width = heights.length - idx
            max = Math.max(max, width * height)
        }

        return max
    }
}
