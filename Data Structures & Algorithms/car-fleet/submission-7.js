class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let posAndSpd = new Array(position.length)
        for (let i = 0; i < position.length; i++) {
            posAndSpd[i] = [position[i], speed[i]]
        }
        posAndSpd = posAndSpd.sort((a,b) => a[0] - b[0])

        let maxTime = -Infinity
        let numOfFleets = 0
        for (let i = posAndSpd.length - 1; i > -1; i--) {
            let [pos, spd] = posAndSpd[i]
            let d = target - pos
            let t = d / spd

            if (t > maxTime) {
                maxTime = t
                numOfFleets++
            }
        }

        return numOfFleets
    }
}
