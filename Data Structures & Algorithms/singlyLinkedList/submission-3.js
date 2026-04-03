class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.length) {
            return -1
        }
        let curr = this.head
        let i = 0
        while (i < index) {
            curr = curr.next
            i++
        }
        return curr.value
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new Node(val)
        if (this.head == null && this.tail == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        let newNode = new Node(val)
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0 || index >= this.length) {
            return false
        }

        if (this.length == 0) {
            return false
        }

        if (this.length == 1) {
            this.head = null
            this.tail = null
            this.length = 0
            return true
        }

        if (index == 0) {
            let curr = this.head
            this.head = this.head.next
            curr.next = null
            this.length--
            return true
        }

        let prev = this.head
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next
        }
        let curr = prev.next
        prev.next = curr.next
        curr.next = null
        if (index == this.length - 1) {
            this.tail = prev
        }
        this.length--
        return true
    }

    /**
     * @return {number[]}
     */
    getValues() {
        let values = []
        let curr = this.head
        while (curr != null) {
            values.push(curr.value)
            curr = curr.next
        }
        return values
    }
}
