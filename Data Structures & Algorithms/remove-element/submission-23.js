class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        if (nums.length == 0 || nums.length == 1 && nums[0] == val) {
            return 0
        }

        let i = 0
        let j = nums.length - 1

        while (i<=j) {
            if (nums[i] == val) {
                if(nums[j] == val) {
                    j--
                    continue
                }
                nums[i] = nums[j]
                nums[j] = val
                j--
            } else {
                i++
            }
        }
        return i
    }
}
