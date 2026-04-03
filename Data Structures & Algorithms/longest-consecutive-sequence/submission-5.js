class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums)
        let max = 0

        for (const num of nums) {
            if (!set.has(num - 1)) {
                let longest = 1
                while (set.has(num + longest)) {
                    longest++
                }
                max = Math.max(max, longest)
            }
        }

        return max
        
    }
}
