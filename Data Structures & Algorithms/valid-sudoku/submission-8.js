class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = {}
        let cols = {}
        let grids = {}

        for (let r = 0; r < 9; r++) {
            rows[r] = new Set()
            for (let c = 0; c < 9; c++) {
                let curr = board[r][c]
                if (curr == '.') continue

                if (cols[c] == undefined) {
                    cols[c] = new Set()
                }

                let grid = [Math.floor(r / 3), Math.floor(c / 3)]
                if (grids[grid] == undefined) {
                    grids[grid] = new Set()
                }

                if (cols[c].has(curr) || rows[r].has(curr) || grids[grid].has(curr)) {
                    return false
                }

                cols[c].add(curr)
                rows[r].add(curr)
                grids[grid].add(curr)
            }
        }

        return true
    }
}
