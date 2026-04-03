class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = []

        let positionAndSpeed = []
        for (let i = 0; i < position.length; i++) {
            positionAndSpeed.push([position[i], speed[i]])
        }
        positionAndSpeed = positionAndSpeed.sort((a,b) => a[0] - b[0])

        for (let i = positionAndSpeed.length - 1; i > -1; i--) {
            let [pos, speed] = positionAndSpeed[i]
            let time = (target - pos) / speed

            if (stack.length == 0 || time > stack[stack.length - 1]) {
                stack.push(time)
            }
        }

        return stack.length
    }
}
