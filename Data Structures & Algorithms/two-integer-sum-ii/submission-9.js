class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let l = 0
        let r = nums.length - 1

        while (l < r) {
            let sum = nums[l] + nums[r]
            if (sum > target) {
                r--
            } else if (sum < target) {
                l++
            } else if (sum == target) {
                return [l + 1, r + 1]
            }
        }

        return []
    }
}
