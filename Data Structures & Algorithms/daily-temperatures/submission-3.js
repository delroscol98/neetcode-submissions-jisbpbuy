class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [{idx: 0, val: temperatures[0]}]
        let res = new Array(temperatures.length).fill(0)

        for (let i = 1; i < temperatures.length; i++) {
            let curr = temperatures[i]

            while (stack.length && curr > stack[stack.length - 1].val) {
                let {idx, val} = stack.pop()
                res[idx] = i - idx
            }
            stack.push({idx: i, val: curr})
        }

        return res
    }
}
