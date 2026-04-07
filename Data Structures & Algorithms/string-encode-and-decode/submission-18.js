class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''
        for (const str of strs) {
            encoded += `${str.length}#${str}`
        }
        return encoded
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
            for(i = j + 1; i < j + 1 + length; i++) {
                word += str[i]
            }
            res.push(word)
        }

        return res
    }
}
