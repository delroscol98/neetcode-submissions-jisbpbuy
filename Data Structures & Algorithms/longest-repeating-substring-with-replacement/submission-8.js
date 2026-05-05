class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let r = 0
        let maxCount = 0
        let res = 0
        let map = new Map()

        while (r < s.length) {
            if (!map.has(s[r])) {
                map.set(s[r], 0)
            }
            map.set(s[r], map.get(s[r]) + 1)
            maxCount = Math.max(maxCount, map.get(s[r]))

            let windowSize = r - l + 1
            if (windowSize - maxCount > k) {
                map.set(s[l], map.get(s[l]) - 1)
                l++
                windowSize--
            }
            res = Math.max(res, windowSize)
            r++
        }

        return res
    }
}
