class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let unique = Array.from(new Set(nums))
        for (let i = 0; i < unique.length; i++) {
            nums[i] = unique[i]
        }
        return unique.length
    }
}
