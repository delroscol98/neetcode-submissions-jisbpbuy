class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let cache = {}
        function recurse(i, c) {
            if (c[i]) {
                return c[i]
            } else {
                if (i == n) {
                    return 1
                }

                if (i > n) {
                    return 0
                }

                if (!cache[i]){
                    c[i] = recurse(i + 1, c) + recurse(i + 2, c)
                }
                return c[i]
            }
        }

        return recurse(0, cache)
    }
}
