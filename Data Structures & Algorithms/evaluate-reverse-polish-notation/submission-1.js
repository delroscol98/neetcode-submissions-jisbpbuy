class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (const token of tokens) {
            if (token != "+" && token != "-" && token != "*" && token != "/") {
                stack.push(token)
            } else {
                let b = parseInt(stack.pop())
                let a = parseInt(stack.pop())

                if (token == '+') {
                    stack.push(a + b)
                } else if (token == "-") {
                    stack.push(a - b)
                } else if (token == "*") {
                    stack.push(a * b)
                } else if (token == "/") {
                    stack.push(Math.trunc(a / b))
                }
            }
        }

        return stack[0]
    }
}
