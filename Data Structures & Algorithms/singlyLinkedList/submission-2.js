class Node {
    constructor(val) {
        this.val = val
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

        let temp = this.head
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }

        return temp.val
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        let newNode = new Node(val)
        if (this.head == null && this.tail == null) {
            this.head = newNode;
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
        if (this.head == null && this.tail == null) {
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
            this.length--
            return true
        }

        if (index == 0) {
            let temp = this.head
            this.head = this.head.next
            temp.next = null
            this.length--
            return true
        }

        let prev = this.head
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next
        }
        let temp = prev.next
        prev.next = temp.next
        temp.next = null
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
        let temp = this.head
        while (temp != null) {
            values.push(temp.val)
            temp = temp.next
        }
        return values
    }
}
