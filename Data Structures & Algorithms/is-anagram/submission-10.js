class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let sHash = {}

        for (let i = 0; i < s.length; i++) {
            let curr = s[i]
            if (sHash[curr] == undefined) {
                sHash[curr] = 1
            } else {
                sHash[curr]++
            }
        }

        let tHash = {}
        for (let j = 0; j < t.length; j++) {
            let curr = t[j]
            if (tHash[curr] == undefined) {
                tHash[curr] = 1
            } else {
                tHash[curr]++
            }
        }

        let entries = Object.entries(sHash)
        for (let i = 0; i < entries.length; i++) {
            let character = entries[i][0]
            let count = entries[i][1]

            if (count != tHash[character]) {
                return false
            }
        }

        return true
    }
}
