class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0
        let r = matrix.length - 1

        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            let curr = matrix[m]
            let start = curr[0]
            let end = curr[curr.length - 1]

            if (target < start) {
                r = m - 1
            } else if (target > end) {
                l = m + 1
            } else {
                let L = 0
                let R = curr.length - 1

                while (L <= R) {
                    let M = Math.floor((L + R) / 2)

                    if (target == curr[M]) {
                        return true
                    } else if (target > curr[M]) {
                        L = M + 1
                    } else if (target < curr[M]) {
                        R = M - 1
                    }
                }
                break
            }
        }
        return false
    }

}
