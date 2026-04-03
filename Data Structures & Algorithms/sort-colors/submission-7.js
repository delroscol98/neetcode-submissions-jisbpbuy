class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let start = 0
        let end = nums.length - 1
        let i = start

        while (i <= end) {
            if (nums[i] == 0) {
                this.swap(nums, start, i)
                start++
            } else if (nums[i] == 2) {
                this.swap(nums, end, i)
                i--
                end--
            }

            i++
            
        }
    }

    swap(nums, i, j) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
}
