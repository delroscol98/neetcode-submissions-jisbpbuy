class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let closeToOpen = new Map()
        closeToOpen.set("}", "{")
        closeToOpen.set("]", "[")
        closeToOpen.set(")", "(")

        for (const char of s) {
            if (!closeToOpen.has(char)) {
                stack.push(char)
            } else {
                if (stack.length == 0 || stack.pop() != closeToOpen.get(char)) {
                    return false
                }
            }
        }

        return stack.length == 0
    }
}
