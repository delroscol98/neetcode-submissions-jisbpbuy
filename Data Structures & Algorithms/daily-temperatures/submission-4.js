class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = [{idx: 0, val: temperatures[0]}]

        for (let i = 1; i < temperatures.length; i++) {
            while (stack.length && temperatures[i] > stack[stack.length - 1].val) {
                let {idx, val} = stack.pop()
                res[idx] = i - idx
            }
            stack.push({idx: i, val: temperatures[i]})
        }

        return res
    }
}
