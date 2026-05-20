class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (const token of tokens) {
            if (
                token != "+" && 
                token != "-" && 
                token != "*" && 
                token != "/"
                ) {
                    stack.push(parseInt(token))
                } else {
                    let b = stack.pop()
                    let a = stack.pop()

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

        return stack.pop()
    }
}
