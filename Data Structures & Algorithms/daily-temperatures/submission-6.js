class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0)
        let stack = [{idx: 0, v: temperatures[0]}]
        for (let i = 1; i < temperatures.length; i++) {
            let curr = temperatures[i]

            while (stack.length && curr > stack[stack.length - 1].v) {
                let {idx, v} = stack.pop()
                res[idx] = i - idx 
            }
            stack.push({idx: i, v: curr})
        }

        return res
    }
}
