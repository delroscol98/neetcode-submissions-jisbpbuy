class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let x = {}
        for (let i = 0; i < nums.length; i++) {
            if(!(nums[i] in x)) {
                x[nums[i]] = true
            } else {
                return x[nums[i]]
            }
        }
        return false
    }
}
