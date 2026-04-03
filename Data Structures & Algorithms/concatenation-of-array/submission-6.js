class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length * 2)

        let i = 0
        let j = 0
        while (j < ans.length) {
            if (i == nums.length) {
                i = 0
            }
            ans[j] = nums[i]
            i++
            j++
        }

        return ans
    }
}
