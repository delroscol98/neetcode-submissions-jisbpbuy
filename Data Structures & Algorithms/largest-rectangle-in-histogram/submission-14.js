class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [[0, heights[0]]]
        let max = 0
        for (let i = 1; i < heights.length; i++) {
            let curr = heights[i]
            let start = i

            while (stack.length > 0 && curr < stack[stack.length - 1][1]) {
                let [idx, ht] = stack.pop()
                let width = i - idx
                let area = width * ht
                
                max = Math.max(max, area)
                start = idx
            }
            stack.push([start, curr])
        }

        for (const [idx, ht] of stack) {
            let width = heights.length - idx
            let area = width * ht
            max = Math.max(max, area)
        }

        return max
    }
}
