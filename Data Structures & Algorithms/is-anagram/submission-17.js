class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let sMap = this.createHash(s)
        let tMap = this.createHash(t)

        for (const [char, count] of Object.entries(sMap)) {
            if (count != tMap[char]) return false
        }

        return true
    }

    createHash(s) {
        let x = {}

        for (const char of s) {
            if (x[char] == undefined) {
                x[char] = 1
            } else {
                x[char]++
            }
        }

        return x
    }
}
