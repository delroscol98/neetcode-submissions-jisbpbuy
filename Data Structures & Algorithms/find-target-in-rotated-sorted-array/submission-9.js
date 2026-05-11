class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1

        while (l <= r) {
            let m = Math.floor((l + r) / 2)

            if (target == nums[m]) {
                return m
            }

            if (nums[l] <= nums[m]) { // If the left side is sorted
                if (target >= nums[l] && target <= nums[m]) {
                    r = m - 1
                } else {
                    l = m + 1
                }
            } else { // If the right side is sorted
                if (target >= nums[m] && target <= nums[r]) {
                    l = m + 1
                } else {
                    r = m -1
                }
            }
        }

        return -1
    }
}
