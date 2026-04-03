class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        let ops = {
            "+": true,
            "-": true,
            "*": true,
            "/": true
        }

        for (const token of tokens) {
            if (ops[token] != true) {
                stack.push(token)
            } else {
                let b = parseInt(stack.pop())
                let a = parseInt(stack.pop())

                if (token == "+") {
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
