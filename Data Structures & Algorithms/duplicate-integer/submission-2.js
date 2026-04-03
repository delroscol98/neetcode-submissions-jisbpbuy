class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let checked = {}

        for (const num of nums) {
            if (num in checked) {
                return true
            } else {
                checked[num] = true
            }
        }

        return false
    }
}
