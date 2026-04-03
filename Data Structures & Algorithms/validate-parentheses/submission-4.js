class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let closeToOpen = {
            ")": "(",
            "}": "{",
            "]": "["
        }

        for (let i = 0; i < s.length; i++) {
            let curr = s[i]

            if (closeToOpen[curr] == undefined) {
                stack.push(curr)
            } else {
                if (stack.length == 0) {
                    return false
                }

                if (closeToOpen[curr] != stack.pop()) {
                    return false
                }
            }
        }

        return stack.length == 0
    }
}
