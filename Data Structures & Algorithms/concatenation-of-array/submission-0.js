class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const length = nums.length
        for (let i = 0; i < length; i++) {
            nums[nums.length] = nums[i]
        }
        
        return nums
    }
}
