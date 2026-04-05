class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let min = Infinity

        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            min = Math.min(min, nums[m])

            if (nums[l] <= nums[m] && nums[l] >= nums[r]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return min
    }
}
