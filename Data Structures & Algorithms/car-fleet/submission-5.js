class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let combined = []
        for (let i = 0; i < position.length; i++) {
            combined[i] = [position[i], speed[i]]
        }
        combined = combined.sort((a,b) => b[0] - a[0])

        let stack = []
        for (const [pos, spd] of combined) {
            let time = (target - pos) / spd

            if (stack.length == 0 || time > stack[stack.length - 1]) {
                stack.push(time)
            }
        }

        return stack.length
    }
}
