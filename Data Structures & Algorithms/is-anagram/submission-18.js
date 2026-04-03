class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let sCount = this.count(s)
        let tCount = this.count(t)

        for (const [char, count] of Object.entries(sCount)) {
            if (count != tCount[char]) return false
        }

        return true
    }

    count(s) {
        let count = {}

        for (const char of s) {
            if (count[char] == undefined) {
                count[char] = 1
            } else {
                count[char]++
            }
        }

        return count
    }
}
