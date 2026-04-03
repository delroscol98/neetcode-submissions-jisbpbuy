class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0
        while (i < nums.length) {
            if (nums[i] == undefined) {
                break
            }

            if (nums[i] == val) {
                for (let j = i; j < nums.length - 1; j++) {
                    nums[j] = nums[j + 1]
                }
                nums[nums.length - 1] = undefined
            } else {
                i++
            }
        }
        return i
    }
}
