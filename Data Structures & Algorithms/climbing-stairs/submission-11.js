class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = {}

        function recurse(i) {
            if (i == 1 || i == 0) {
                return 1
            }

            if (cache[i] == undefined) {
                cache[i] = recurse(i - 1) + recurse(i - 2)
            }
            return cache[i]
        }

        return recurse(n)
    }
}