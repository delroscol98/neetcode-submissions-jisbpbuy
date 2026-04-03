class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let closeToOpen = {
            "}": "{",
            "]": "[",
            ")": "("
        }
        let stack = []

        for (const char of s) {
            if (closeToOpen[char] == undefined) {
                stack.push(char)
            } else {
                if (stack.length == 0 || closeToOpen[char] != stack.pop()) {
                    return false
                }
            }
        }

        return stack.length == 0
    }
}
