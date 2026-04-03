class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let closeToOpen = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }
        for (let i = 0; i < s.length; i++) {
            if (!(s[i] in closeToOpen)) {
                stack.push(s[i])
            } else {
                if (stack.length == 0) {
                    return false
                } else {
                    let lastOpen = stack.pop()
                    if (closeToOpen[s[i]] != lastOpen) {
                        return false
                    }
                }
            }
        }

        return stack.length == 0
    }
}
