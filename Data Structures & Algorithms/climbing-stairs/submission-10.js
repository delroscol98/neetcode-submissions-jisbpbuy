class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = {}

        function recurse(i) {
            if (i == n) {
                return 1
            }

            if (i > n) {
                return 0
            }

            if (cache[i] == undefined) {
                cache[i] = recurse(i + 1) + recurse(i + 2)
            }
            return cache[i]
        }

        return recurse(0)
    }
}