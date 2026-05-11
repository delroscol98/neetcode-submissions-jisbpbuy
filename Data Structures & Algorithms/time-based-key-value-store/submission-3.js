class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.get(key)) {
            this.keyStore.set(key, [])
        }
        let arr = this.keyStore.get(key)
        arr.push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) {
            return ""
        }

        let arr = this.keyStore.get(key)
        let l = 0
        let r = arr.length - 1
        let res = ""

        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            let [val, ts] = arr[m]

            if (ts <= timestamp) {
                res = val
                l = m + 1   
            } else {
                r = m - 1
            }
        }

        return res
    }
}
