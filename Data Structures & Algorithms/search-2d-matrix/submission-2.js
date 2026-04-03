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
            let m = Math.floor((r + l) / 2)
            if (target < matrix[m][0]) {
                r = m - 1
            } else if (target > matrix[m][matrix[m].length - 1]) {
                l = m + 1
            } else {
                let left = 0
                let right = matrix[m].length - 1

                while (left <= right) {
                    let mid = Math.floor((left + right) / 2)
                    if (target > matrix[m][mid]) {
                        left = mid + 1
                    } else if (target < matrix[m][mid]) {
                        right = mid - 1
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
