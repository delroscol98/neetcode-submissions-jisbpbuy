class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let closeToOpen = {
            ")": '(',
            "}": "{",
            "]": "["
        }
        let stack = []

        for (const bracket of s) {
            if (closeToOpen[bracket] == undefined) {
                stack.push(bracket)
            } else {
                if (stack.length == 0 || closeToOpen[bracket] != stack.pop()) {
                    return false
                }
            }
        }

        return stack.length == 0
    }
}
