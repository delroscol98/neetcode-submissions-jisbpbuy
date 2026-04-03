class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {}

        for (const num of nums) {
            if (map[num] == undefined) {
                map[num] = true
            } else {
                return true
            }
        }

        return false

    }
}
