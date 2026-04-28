class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length == 0) return ""

        let window = {}
        let tCount = {}

        let need = 0
        for (const char of t) {
            if (tCount[char] == undefined) {
                tCount[char] = 0
                need++
            }
            tCount[char]++
        }

        let have = 0
        let res = [-1, -1]
        let resLen = Infinity
        let l = 0
        
        for (let r = 0; r < s.length; r++) {
            let right = s[r]

            if (window[right] == undefined) {
                window[right] = 0
            }
            window[right]++

            if (tCount[right] != undefined && window[right] == tCount[right]) {
                have++
            }

            while (have == need) {
                // Updating the result
                let len = r - l  + 1
                if (len < resLen) {
                    res[0] = l
                    res[1] = r
                    resLen = len
                }

                // Decrementing character count
                let left = s[l]
                window[left]--

                // Decrementing have count
                if (tCount[left] != undefined && window[left] < tCount[left]) {
                    have--
                }

                // Incrementing left pointer
                l++
            }
        }

        let [left, right] = res
        return s.substring(left, right + 1)
    }
}
