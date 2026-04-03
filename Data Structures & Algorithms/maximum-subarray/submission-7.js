class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0]
        let curSum = 0
        let l = 0
        for (let r = 0; r < nums.length; r++) {
            if (curSum < 0) {
                curSum = 0
                l = r
            }
            curSum += nums[r]
            if (curSum > max) {
                max = curSum
            }
        }

        return max
    }
}
