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
        let res = 0
        let maxF = 0

        while (r < s.length) {
            let char = s[r]
            if (!map.has(char)) {
                map.set(char, 0)
            }
            map.set(char, map.get(char) + 1)

            maxF = Math.max(maxF, map.get(char))
            let windowLength = r - l + 1

            while (windowLength - maxF > k) {
                map.set(s[l], map.get(s[l]) - 1)
                windowLength--
                l++
            }

            res = Math.max(res, windowLength)
            r++ 
        }

        return res
    }
}

