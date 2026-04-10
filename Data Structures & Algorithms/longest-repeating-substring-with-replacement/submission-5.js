class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let h = {}
        let maxCount = 0
        let l = 0
        let r = 0
        let res = 0

        while (r < s.length) {
            if (h[s[r]] == undefined) {
                h[s[r]] = 0
            }
            h[s[r]]++
            maxCount = Math.max(maxCount, h[s[r]])

            let length = r - l + 1
            if (length - maxCount > k) {
                h[s[l]]--
                length--
                l++
            }
            res = Math.max(res, length)
            r++
        }

        return res
    }
}
