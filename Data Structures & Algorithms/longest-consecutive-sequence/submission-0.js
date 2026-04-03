class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length == 0) return 0

        let set = new Set(nums)

        let longest = -Infinity
        for (const num of nums) {
            if (!set.has(num - 1)) {
                let count = 1
                while (set.has(num + count)) {
                    count++
                }
                longest = Math.max(longest, count)
            }
        }

        return longest
    }
}
