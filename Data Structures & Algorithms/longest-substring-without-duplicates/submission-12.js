class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()
        let l = 0
        let r = 0
        let longest = 0

        while (r < s.length) {
            while (set.has(s[r])) {
                set.delete(s[l])
                l++
            }

            set.add(s[r])
            longest = Math.max(longest, r - l + 1)
            r++
        }

        return longest
    }
}
