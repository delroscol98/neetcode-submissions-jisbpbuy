class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let L = 0
        let R = matrix.length - 1

        while (L <= R) {
            let M = Math.floor((L + R) / 2)
            let curr = matrix[M]
            let start = curr[0]
            let end = curr[curr.length - 1]

            if (target < start) {
                R = M - 1
            } else if (target > end) {
                L = M + 1
            } else {
                let l = 0
                let r = curr.length - 1

                while (l <= r) {
                    let m = Math.floor((l + r) / 2)

                    if (target > curr[m]) {
                        l = m + 1
                    } else if (target < curr[m]) {
                        r = m - 1
                    } else {
                        return true
                    }
                }

                break
            }
        }
        return false
    }
}
