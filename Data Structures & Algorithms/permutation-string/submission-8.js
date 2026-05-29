class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false

        let s1Map = new Map()
        for (const char of s1) {
            if (!s1Map.has(char)) {
                s1Map.set(char, 0)
            }
            s1Map.set(char, s1Map.get(char) + 1)
        }

        let l = 0
        let r = 0
        let s2Map = new Map()

        while (r < s2.length) {
            let rChar = s2[r]
            if (!s2Map.has(rChar)) {
                s2Map.set(rChar, 0)
            }
            s2Map.set(rChar, s2Map.get(rChar) + 1)

            if (r - l + 1 > s1.length) {
                let lChar = s2[l]
                s2Map.set(lChar, s2Map.get(lChar) - 1)
                if (s2Map.get(lChar) === 0) s2Map.delete(lChar)
                l++
            }

            if (r - l + 1 === s1.length) {
                let match = true
                for (let [key, val] of s1Map) {
                    if (s2Map.get(key) !== val) {
                        match = false
                        break
                    }
                }
                if (match) return true
            }
            r++
        }

        return false
    }
}