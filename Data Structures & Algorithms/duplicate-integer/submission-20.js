class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let x = {}

        for (const n of nums) {
            if (x[n] == undefined) {
                x[n] = true
            } else {
                return true
            }
        }

        return false
    }
}
