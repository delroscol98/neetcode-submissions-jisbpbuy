class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = new Array(capacity)
        this.capacity = capacity
        this.length = 0
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
        let temp = this.array[this.length - 1]
        this.array[this.length - 1] = undefined

        this.length--
        return temp
    }

    /**
     * @returns {void}
     */
    resize() {
        let newArray = new Array(2 * this.capacity)
        for (let i = 0; i < this.capacity; i++) {
            newArray[i] = this.array[i]
        }
        this.array = newArray
        this.capacity *= 2
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
