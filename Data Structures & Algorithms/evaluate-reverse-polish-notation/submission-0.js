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
                if (token == "+") {
                    let sum = a + b
                    stack.push(sum)
                } else if (token == "-") {
                    let diff = a - b
                    stack.push(diff)
                } else if (token == "*") {
                    let product = a * b
                    stack.push(product)
                } else if (token == "/") {
                    let quotient = Math.trunc(a / b)
                    stack.push(quotient)
                }
            }
        }

        return stack[0]
    }
}
