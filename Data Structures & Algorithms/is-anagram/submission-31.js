class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let map = new Map()

        for (let i = 0; i < s.length; i++) {
            map.set(s[i], ((map.get(s[i]) || 0) + 1))
            map.set(t[i], ((map.get(t[i]) || 0) - 1))
        }

        let res = true
        map.forEach((val) => {
            if (val != 0) {
                res = false
            }
        })

        return res
    }
}
