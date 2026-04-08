class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = [[0, temperatures[0]]]

        for (let i = 1; i < temperatures.length; i++) {
            let curr = temperatures[i]
            while (stack.length > 0 && curr > stack[stack.length - 1][1]) {
                let [idx, temp] = stack.pop()
                res[idx] = i - idx
            }
            stack.push([i, curr])
        }

        return res
    }
}
