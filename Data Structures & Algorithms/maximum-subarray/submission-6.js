class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let max = nums[0]
        for (let l = 0; l < nums.length; l++) {
            let curSum = 0
            for (let r = l; r < nums.length; r++) {
                curSum += nums[r]
                max = Math.max(max, curSum)
            }
        }
        return max
    }
}
