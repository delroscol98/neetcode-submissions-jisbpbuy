class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t == "") return ""

        let countT = {}
        let window = {}

        for (const char of t) {
            if (countT[char] == undefined) {
                countT[char] = 0
            }
            countT[char]++
        }

        let have = 0
        let need = Object.keys(countT).length
        let res = [-1, -1]
        let resLen = Infinity
        let l = 0

        for (let r = 0; r < s.length; r++) {
            let char = s[r]
            if (window[char] == undefined) {
                window[char] = 0
            }
            window[char]++

            if (countT[char] != undefined && window[char] == countT[char]) {
                have++
            }

            while (have == need) {
                // update our result
                if (r - l + 1 < resLen) {
                    res = [l, r]
                    resLen = r - l + 1
                }

                //pop from the left of our window
                window[s[l]]--

                if (countT[s[l]] != undefined && window[s[l]] < countT[s[l]]) {
                    have--
                }
                l++
            }
        }
        let [left, right] = res
        return s.substring(left, right + 1)
    }
}
