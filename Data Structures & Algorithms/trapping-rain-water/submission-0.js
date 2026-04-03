class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeftArr = new Array(height.length).fill(0)
        let currMaxLeft = 0
        for (let i = 1; i < height.length; i++) {
            if (height[i - 1] > currMaxLeft) {
                currMaxLeft = height[i - 1]
            }

            maxLeftArr[i] = currMaxLeft
        }

        let maxRightArr = new Array(height.length).fill(0)
        let currMaxRight = 0
        for (let i = height.length - 2; i > -1; i--) {
            if (height[i + 1] > currMaxRight) {
                currMaxRight = height[i + 1]
            }

            maxRightArr[i] = currMaxRight
        }

        let minLR = new Array(height.length)
        for (let i = 0; i < height.length; i++) {
            minLR[i] = Math.min(maxLeftArr[i], maxRightArr[i])
        }

        let total = 0
        for (let i = 0; i < height.length; i++) {
            let water = minLR[i] - height[i]

            if (water <= 0) {
                water = 0
            }

            total += water
        }

        return total
    }
}
