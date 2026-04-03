class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let closeToOpen = {
            ")": "(",
            "]": "[",
            "}": "{"
        }
        for (let i = 0; i < s.length; i++) {
            if (closeToOpen[s[i]] == undefined) {
                stack.push(s[i])
            } else {
                if (stack.length == 0) {
                    return false
                }

                if (closeToOpen[s[i]] != stack.pop()) {
                    return false
                }
            }
        }

        return stack.length == 0
    }
}
