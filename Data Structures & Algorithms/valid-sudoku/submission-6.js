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

                let g = [Math.floor(r/3), Math.floor(c/3)]
                g = JSON.stringify(g)

                if (grids[g] == undefined) {
                    grids[g] = new Set()
                }

                if (
                    rows[r].has(curr) ||
                    cols[c].has(curr) ||
                    grids[g].has(curr)
                ) {
                    return false
                }

                rows[r].add(curr)
                cols[c].add(curr)
                grids[g].add(curr)
            }
        }

        return true
    }
}
