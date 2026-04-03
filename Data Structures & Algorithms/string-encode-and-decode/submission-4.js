class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        
        for (let i = 0; i < strs.length; i++) {
            res += `${strs[i].length}#${strs[i]}`
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
            while (str[j] !== '#') {
                j++
            }

            let length = ''
            for (i; i < j; i++) {
                length += str[i]
            }
            length = parseInt(length)

            let word = ''
            for (i = j + 1; i < j + 1 + length; i++) {
                word += str[i]
            }
            res.push(word)
        }

        return res
    }
}
