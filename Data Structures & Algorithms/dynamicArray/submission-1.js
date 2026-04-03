class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = new Array(capacity)
        this.length = 0
        this.capacity = capacity
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.length == this.capacity) {
            this.resize()
        }
        this.array[this.length] = n
        this.length++
    }

    /**
     * @returns {number}
     */
    popback() {
        let curr = this.array[this.length - 1]
        this.array[this.length - 1] = undefined
        this.length--

        return curr
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = 2 * this.capacity
        let newArray = new Array(this.capacity)

        for (let i = 0; i < this.length; i++) {
            newArray[i] = this.array[i]
        }

        this.array = newArray
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
