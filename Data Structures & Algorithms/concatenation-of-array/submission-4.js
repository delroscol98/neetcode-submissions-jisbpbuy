class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length * 2)
        let i = 0
        let j = 0
        while (i < ans.length) {
            if (j == nums.length) {
                j = 0
            }
            ans[i] = nums[j]
            i++
            j++
        }

        return ans
    }
}
