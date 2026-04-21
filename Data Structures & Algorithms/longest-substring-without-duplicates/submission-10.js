class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let r = 0
        let maxSize = 0
        let set = new Set()

        while (r < s.length) {
            while (set.has(s[r])) {
                set.delete(s[l])
                l++
            }

            maxSize = Math.max(maxSize, r - l + 1)
            set.add(s[r])
            r++
        }

        return maxSize
    }
}
