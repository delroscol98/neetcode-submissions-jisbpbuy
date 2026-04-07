class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = {}
        let l = 0
        let r = 0
        let res = 0
        let maxF = 0
        
        while (r < s.length) {
            if (count[s[r]] == undefined) {
                count[s[r]] = 0
            }
            count[s[r]]++
            maxF = Math.max(maxF, count[s[r]])

            let size = r - l + 1
            if (size - maxF > k) {
                count[s[l]]--
                size--
                l++
            }
            res = Math.max(res, size)
            r++
        }

        return res
    }
}
