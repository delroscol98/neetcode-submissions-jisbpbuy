class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let max = 0
        let set = new Set(nums)

        for (let i = 0; i < nums.length; i++) {
            if (!set.has(nums[i] - 1)) {
                let longest = 1

                while (set.has(nums[i] + longest)) {
                    longest++
                }

                max = Math.max(max, longest)
            }
        }

        return max
    }
}
