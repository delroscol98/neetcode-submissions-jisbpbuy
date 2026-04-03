class Node {
    constructor(val) {
        this.value = val
        this.next = null
        this.prev = null
    }
}

class MyDeque {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.length == 0
    }

    /**
     * @param {number} value
     */
    append(value) {
        let newNode = new Node(value)
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
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        let newNode = new Node(value)
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.length == 0) {
            return -1
        }

        if (this.length == 1) {
            let target = this.head
            this.head = null
            this.tail = null
            this.length = 0
            return target.value
        }

        let target = this.tail
        this.tail = target.prev
        this.tail.next = null
        target.prev = null
        this.length--
        return target.value

    }

    /**
     * @return {number}
     */
    popleft() {
        if (this.length == 0) {
            return -1
        }

        if (this.length == 1) {
            let target = this.head
            this.head = null
            this.tail = null
            this.length = 0
            return target.value
        }

        let target = this.head
        this.head = target.next
        this.head.prev = null
        target.next = null
        this.length--
        return target.value
    }
}
