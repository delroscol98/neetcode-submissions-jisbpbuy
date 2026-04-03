class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = {}
        for (const num of nums) {
            if (!hash[num]) {
                hash[num] = true
            } else {
                return true
            }
        }

        return false
    }
}
