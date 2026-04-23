class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
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

        for (let i = 0; i < t.length; i++) {
            let curr = t[i]

            if (tMap[curr] == undefined) {
                tMap[curr] = 1
            } else {
                tMap[curr]++
            }
        }

        let entries = Object.entries(sMap)

        for (let i = 0; i < entries.length; i++) {
            let curr = entries[i]

            let char = curr[0]
            let num = curr[1]

            if (tMap[char] != num) {
                return false
            }
        } return true
    }
}
