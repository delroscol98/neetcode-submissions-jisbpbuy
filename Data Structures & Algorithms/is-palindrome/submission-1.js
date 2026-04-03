class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let res = ''

        for (const char of s) {
            let c = this.isAlphaNum(char)
            if (c) {
                res += c
            }
        }

        if (res.length === 0) return true

        let i = 0
        let j = res.length - 1

        if (res.length % 2 == 0) {
            while (i + 1 !== j) {
                console.log("value of res[i]: " + res[i])
                console.log("value of res[j]: " + res[j])
                if (res[i] !== res[j]) return false
                i++
                j--
            }
            if (res[i] !== res[j]) return false
        } else {
            while (i !== j) {
                if (res[i] !== res[j]) return false
                i++
                j--
            }
        }

        return true
    }

    isAlphaNum(char) {
        if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9') {
            return char
        } else if (char >= 'A' && char <= 'Z') {
            return char.toLowerCase()
        }

        return null
    }
}
