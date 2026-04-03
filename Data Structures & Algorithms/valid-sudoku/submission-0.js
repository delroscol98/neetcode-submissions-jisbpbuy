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
                let tile = board[r][c]
                
                if (tile == '.') continue

                if (cols[c] == undefined) {
                    cols[c] = new Set()
                }

                let g = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`
                if (grids[g] == undefined) {
                    grids[g] = new Set()
                }

                if (rows[r].has(tile) || cols[c].has(tile) || grids[g].has(tile)) {
                    return false
                }

                rows[r].add(tile)
                cols[c].add(tile)
                grids[g].add(tile)
            }
        }

        return true
    }
}
