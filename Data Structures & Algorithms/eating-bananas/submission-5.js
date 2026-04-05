class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = Infinity
        
        let speed = 1
        while (true) {
            let time = 0
            for (const pile of piles) {
                time += Math.ceil(pile / speed)
            }
            if (time <= h) {
                return speed
            }

            speed++
        }
    }
}
