class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity

        let l = 0
        let r = nums.length - 1
        
        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            min = Math.min(min, nums[m])
            
            if (nums[l] >= nums[r] && nums[m] >= nums[l]) {
                l = m + 1
            } else {
                r = m - 1
            }
        }

        return min
    }
}
