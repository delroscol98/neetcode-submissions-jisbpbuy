class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let r = 0
        let map = new Map()
        let maxChar = 0
        let longest = 0

        while (r < s.length) {
            if (!map.has(s[r])) {
                map.set(s[r], 0)
            }
            map.set(s[r], map.get(s[r]) + 1)
            maxChar = Math.max(maxChar, map.get(s[r]))

            let window = r - l + 1
            while (window - maxChar > k) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
                window--
            }
            longest = Math.max(longest, window)

            r++
        }

        return longest
    }
}
