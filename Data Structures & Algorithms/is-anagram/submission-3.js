class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        let a = s.split("").sort()
        let b = t.split("").sort()

        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) {
                return false
            }
        }

        return true
    }
}
