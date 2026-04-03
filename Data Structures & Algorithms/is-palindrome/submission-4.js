class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            while (l < r && !this.isAlphaNumeric(s[l])) {
                l++
            }

            while (l < r && !this.isAlphaNumeric(s[r])) {
                r--
            }

            if (s[l].toLowerCase() != s[r].toLowerCase()) {
                return false
            }
            l++
            r--
        }

        return true
    }

    isAlphaNumeric(char) {
        return (
            (char >= '0' && char <= '9') || 
            (char >= 'A' && char <= 'Z') ||
            (char >= 'a' && char <= 'z') 
        )
    }
}
