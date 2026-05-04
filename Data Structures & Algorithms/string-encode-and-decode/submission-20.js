class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (const str of strs) {
            res += `${str.length}#${str}`
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0
        while (i < str.length) {
            let j = i

            let len = ""
            while (str[j] != "#") {
                len += str[j]
                j++
            }
            len = parseInt(len)

            let word = ""
            for (i = j + 1; i < j + 1 + len; i++) {
                word += str[i]
            }
            res.push(word)
        }

        return res
    }
}
