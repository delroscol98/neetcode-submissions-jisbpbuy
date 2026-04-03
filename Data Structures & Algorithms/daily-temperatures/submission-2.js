class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        if (temperatures.length == 1) return 0
        let res = new Array(temperatures.length).fill(0)

        let i = 0
        let j = i
        while (i < temperatures.length) {
            j = i + 1
            let count = 1

            while (j < temperatures.length && temperatures[j] <= temperatures[i]) {
                count++
                j++
            }

            if (j >= temperatures.length) {
                count = 0
            }

            res[i] = count
            i++
        }
        
        return res
    }
}
