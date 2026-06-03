class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return ""

        let window = new Map()
        let tCount = new Map()

        let need = 0
        for (const char of t) {
            if (!tCount.has(char)) {
                tCount.set(char, 0)
                need++
            }
            tCount.set(char, tCount.get(char) + 1)
        }

        let have = 0
        let res = [-1, -1]
        let resLen = Infinity
        let l = 0
        let r = 0

        while (r < s.length) {
            let right = s[r]
            if (!window.has(right)) {
                window.set(right, 0)
            }
            window.set(right, window.get(right) + 1)

            if (tCount.has(right) && (window.get(right) == tCount.get(right))) {
                have++
            }

            while (have == need) {
                let len = r - l + 1
                if (len < resLen) {
                    res[0] = l
                    res[1] = r
                    resLen = len
                }

                let left = s[l]
                window.set(left, window.get(left) - 1)

                if (tCount.has(left) && (window.get(left) < tCount.get(left))) {
                    have--
                }

                l++
            }
            r++
        }

        let [left, right] = res
        return s.substring(left, right + 1)
    }
}
