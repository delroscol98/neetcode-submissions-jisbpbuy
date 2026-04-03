class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = ""
        for (const str of strs) {
            s += `${str.length}#${str}`
        }
        return s
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
            let length = ''
            while (str[j] != '#') {
                length += str[j]
                j++
            }
            length = parseInt(length)

            let word = ''
            i = j + 1
            while (i < j + 1 + length) {
                word += str[i]
                i++
            }
            res.push(word)
        }

        return res
    }
}
