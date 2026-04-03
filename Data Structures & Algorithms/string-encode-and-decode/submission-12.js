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
        let decoded = []
        let i = 0;
        while (i < str.length) {
            let j = i
            let length = ''
            while (str[j] != '#') {
                length += str[j]
                j++
            }
            length = parseInt(length)

            let word = ''
            for (i = j + 1; i < j + 1 + length; i++) {
                word += str[i]
            }
            decoded.push(word)
        }

        return decoded
    }
}
