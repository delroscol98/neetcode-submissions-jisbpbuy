class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let i = 0
        let j = 0

        while (j < nums.length) {
            nums[i] = nums[j]
            while (j < nums.length && nums[j] == nums[i]) {
                j++
            }
            i++
        }

        return i
    }
}
