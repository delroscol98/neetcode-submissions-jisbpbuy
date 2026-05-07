class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) {
            return false
        }

        let sMap = this.createMap(s)
        let tMap = this.createMap(t)

        let res = true

        sMap.forEach((count, char, map) => {
            if (!tMap.has(char) || count != tMap.get(char)) {
                res = false
            }
        })

        return res
    }

    createMap(str) {
        let map = new Map()

        for (const char of str) {
            if (!map.has(char)) {
                map.set(char, 0)
            }
            map.set(char, map.get(char) + 1)
        }

        return map
    }
}
