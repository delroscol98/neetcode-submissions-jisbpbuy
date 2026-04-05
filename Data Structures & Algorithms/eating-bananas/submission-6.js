class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1
        let r = Math.max(...piles)
        let min = Infinity

        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            let time = 0

            for (const pile of piles) {
                time += Math.ceil(pile / m)
            }
            if (time > h) {
                l = m + 1
            } else if (time <= h) {
                min = Math.min(min, m)
                r = m - 1
            }
        }

        return min
    }
}
