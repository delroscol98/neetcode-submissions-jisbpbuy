class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let sMap = {}
        for (const char of s) {
            if (!sMap[char]) {
                sMap[char] = 1
            } else {
                sMap[char]++
            }
        }

        let tMap = {}
        for (const char of t) {
            if (!tMap[char]) {
                tMap[char] = 1
            } else {
                tMap[char]++
            }
        }

        for (const [char, count] of Object.entries(sMap)) {
            if (count != tMap[char]) return false
        }

        return true
    }
}
