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

        for (const char in sMap) {
            let count = sMap[char]

            if (!tMap.hasOwnProperty(char) || tMap[char] != count) {
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
