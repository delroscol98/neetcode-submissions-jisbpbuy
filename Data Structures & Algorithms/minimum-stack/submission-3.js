class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
        this.length = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if (this.length == 0) {
            this.minStack.push(val)
        } else {
            val = Math.min(val, this.minStack[this.length - 1])
            this.minStack.push(val)
        }
        this.length++
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
        this.length--;
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.length - 1]
    }
}
