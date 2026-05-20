class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map()
        let l = 0
        let r = 0
        let longest = 0
        let maxLength = 0

        while (r < s.length) {
            if (!map.has(s[r])) {
                map.set(s[r], 0)
            }
            map.set(s[r], map.get(s[r]) + 1)
            longest = Math.max(longest, map.get(s[r]))

            let length = r - l + 1
            if (length - longest > k) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
                length--
            }

            maxLength = Math.max(maxLength, length)
            r++
        }

        return maxLength
    }
}
