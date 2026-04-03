class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let answer = new Array(2 * nums.length)
        let i = 0
        let j = 0
        while (j < answer.length) {
            if (i == nums.length) {
                i = 0
            }

            answer[j] = nums[i]
            i++
            j++
        }
        return answer
    }
}
