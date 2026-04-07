class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let sMap = this.createMap(s)
        let tMap = this.createMap(t)

        for (const [char, count] of Object.entries(sMap)) {
            if (count != tMap[char]) {
                return false
            }
        }

        return true
    }

    createMap(str) {
        let map = {}

        for (const char of str) {
            if (map[char] == undefined) {
                map[char] = 0
            }
            map[char]++
        }

        return map
    }
}
