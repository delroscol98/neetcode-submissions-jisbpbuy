class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''
        for (let i = 0; i < strs.length; i++) {
            let length = strs[i].length
            encoded += length + "#" + strs[i]
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = []
        let l = 0
        while (l < str.length) {
            let r = l

            let length = ''
            while (str[r] != '#') {
                length += str[r]
                r++
            }
            length = parseInt(length)

            let word = ''
            for (l = r + 1; l < r + 1 +length ; l++) {
                word += str[l]
            }
            decoded.push(word)
        }

        return decoded
    }
}
