class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let ps = []
        for (let i = 0; i < position.length; i++) {
            ps[i] = [position[i], speed[i]]
        }
        ps = ps.sort((a,b) => b[0] - a[0])

        let stack = []
        for (const [pos, speed] of ps) {
            let time = (target - pos) / speed
            if (stack.length == 0 || time > stack[stack.length - 1]) {
                stack.push(time)
            }
        }

        return stack.length
    }
}
