class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            while (l < r && !this.isAN(s[l])) {
                l++
            }

            while (l < r && !this.isAN(s[r])) {
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

    isAN(char) {
        return (
            (char >= '0' && char <= '9') ||
            (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z')
        )
    }
}
