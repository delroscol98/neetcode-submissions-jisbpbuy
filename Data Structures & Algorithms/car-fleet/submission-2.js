class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = []
        let combined = []
        for (let i = 0; i < position.length; i++) {
            combined.push([position[i], speed[i]])
        }
        combined = combined.sort((a,b) => a[0] - b[0])

        for (let i = combined.length - 1; i > -1; i--) {
            let pos = combined[i][0]
            let spd = combined[i][1]

            let time = (target - pos) / spd

            if (stack.length == 0 || time > stack[stack.length - 1]) {
                stack.push(time)
            }
        }

        return stack.length
    }
}
