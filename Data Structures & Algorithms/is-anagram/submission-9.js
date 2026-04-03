class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let sMap = {}
        for (let i = 0; i < s.length; i++) {
            let curr = s[i]
            if (sMap[curr] == undefined) {
                sMap[curr] = 1
            } else {
                sMap[curr]++
            }
        }

        let tMap = {}
        for (let j = 0; j < t.length; j++) {
            let curr = t[j]
            if (tMap[curr] == undefined) {
                tMap[curr] = 1
            } else {
                tMap[curr]++
            }
        }

        let entries = Object.entries(sMap)
        for (let k = 0; k < entries.length; k++) {
            let curr = entries[k]
            let key = curr[0]
            let val = curr[1]

            if (tMap[key] != val) {
                return false
            }
        }

        return true
    }
}
