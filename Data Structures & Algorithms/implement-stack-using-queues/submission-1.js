class Node {
    constructor(val) {
        this.value = val
        this.prev = null
        this.next = null
    }
}

class MyStack {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        let newNode = new Node(x)
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.length == 0) {
            return -1
        }

        if (this.length == 1) {
            let curr = this.head
            this.head = null
            this.tail = null
            this.length = 0

            return curr.value
        }

        for (let i = 0; i < this.length - 1; i++) {
            let curr = this.head
            let next = this.head.next
            curr.next = null
            next.prev = null
            this.head = next
            
            this.tail.next = curr
            curr.prev = this.tail
            this.tail = curr
        }

        let target = this.head
        this.head = target.next
        target.next = null
        this.head.prev = null
        this.length--

        return target.value
    }

    /**
     * @return {number}
     */
    top() {
        return this.tail.value
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.length == 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
