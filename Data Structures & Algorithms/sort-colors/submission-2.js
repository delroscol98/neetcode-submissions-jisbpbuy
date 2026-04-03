class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let counts = new Array(nums.length).fill(0)
        for (let i = 0; i < nums.length; i++) {
            counts[nums[i]]++
        }

        let i = 0
        for (let j = 0; j < counts.length; j++) {
            for (let k = 0; k < counts[j]; k++) {
                nums[i] = j
                i++
            }
        }
    }
}
