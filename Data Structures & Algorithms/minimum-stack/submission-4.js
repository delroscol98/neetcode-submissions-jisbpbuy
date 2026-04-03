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
            let curMin = this.getMin()
            if (val < curMin) {
                this.minStack.push(val) 
            } else {
                this.minStack.push(curMin)
            }
        }

        this.length++
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
        this.length--
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
