class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let sHash = this.createHash(s)
        let tHash = this.createHash(t)

        for (const [char, count] of Object.entries(sHash)) {
            if (count != tHash[char]) return false
        }

        return true
    }

    createHash(str) {
        let hash = {}

        for (const char of str) {
            if (hash[char] == undefined) {
                hash[char] = 1
            } else {
                hash[char]++
            }
        }

        return hash
    }
}
