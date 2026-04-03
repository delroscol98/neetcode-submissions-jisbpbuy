class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let sMap = {}
        let tMap = {}

        for (let i = 0; i < s.length; i++) {
            if (!(s[i] in sMap)) {
                sMap[s[i]] = 1
            } else {
                sMap[s[i]]++
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (!(t[i] in tMap)) {
                tMap[t[i]] = 1
            } else {
                tMap[t[i]]++
            }
        }

        for (const el in sMap) {
            if (sMap[el] != tMap[el]) {
                return false
            }
        }

        return true
    }
}
