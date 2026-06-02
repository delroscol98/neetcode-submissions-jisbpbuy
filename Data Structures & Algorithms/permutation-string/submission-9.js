class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false

        let s1Count = new Array(26).fill(0)
        let s2Count = new Array(26).fill(0)

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
            s2Count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
        }

        let matches = 0
        for (let i = 0; i < 26; i++) {
            if (s1Count[i] == s2Count[i]) matches++
        }

        let l = 0
        let r = s1.length

        while (r < s2.length) {
            if (matches == 26) return true

            let L = s2.charCodeAt(l) - 'a'.charCodeAt(0)
            s2Count[L]--
            if (s1Count[L] == s2Count[L]) {
                matches++
            } else if (s1Count[L] - 1 == s2Count[L]) {
                matches--
            }

            let R = s2.charCodeAt(r) - 'a'.charCodeAt(0)
            s2Count[R]++
            if (s1Count[R] == s2Count[R]) {
                matches++
            } else if (s1Count[R] + 1 == s2Count[R]) {
                matches--
            }

            l++
            r++
        }

        return matches == 26
    }
}
