class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {}

        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            if (hash[curr] == undefined) {
                hash[curr] = true
            } else {
                return true
            }
        }

        return false
    }
}
