class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 0
        let r = Math.max(...piles)
        let min = r

        while (l <= r) {
            let m = Math.floor((l + r) / 2)

            let time = 0
            for (const pile of piles) {
                time += Math.ceil(pile / m)
            }

            if (time > h) {
                l = m + 1
            } else {
                min = m
                r = m - 1
            }
        }

        return min
    }
}
