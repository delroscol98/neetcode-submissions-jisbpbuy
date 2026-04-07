class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let r = 0
        let res = 0
        let maxF = 0
        let count = {}

        while (r < s.length) {
            if (count[s[r]] == undefined) {
                count[s[r]] = 0
            }
            count[s[r]]++
            maxF = Math.max(maxF, count[s[r]])

            let length = r - l + 1
            if (length - maxF > k) {
                count[s[l]]--
                length--
                l++
            }
            res = Math.max(res, length)
            r++
        }

        return res
    }
}
