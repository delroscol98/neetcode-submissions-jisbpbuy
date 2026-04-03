class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let sMap = this.createMap(s)
        let tMap = this.createMap(t)

        for (const [key, value] of Object.entries(sMap)) {
            if (tMap[key] !== value) return false
        }

        return true
    }

    createMap(s) {
        let map = {}

        for (const char of s) {
            if (map[char] == undefined) {
                map[char] = 1
            } else {
                map[char]++
            }
        }

        return map
    }
}
