class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        let stack = []

        for (const token of s) {
            if (!(token in closeToOpen)) {
                stack.push(token)
            } else {
                if (stack.length > 0 && stack[stack.length - 1] == closeToOpen[token]) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }

        return stack.length == 0
    }
}
