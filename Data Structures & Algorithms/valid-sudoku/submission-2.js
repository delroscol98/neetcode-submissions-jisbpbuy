class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = {}
        let cols = {}
        let grids = {}

        for (let r = 0; r < board.length; r++) {
            rows[r] = new Set()
            for (let c = 0; c < board[r].length; c++) {
                let tile = board[r][c]

                if (tile == ".") {
                    continue
                }

                if (cols[c] == undefined) {
                    cols[c] = new Set()
                }

                let grid = JSON.stringify([Math.floor(r / 3), Math.floor(c / 3)])
                if (grids[grid] == undefined) {
                    grids[grid] = new Set()
                }

                if (rows[r].has(tile) || cols[c].has(tile) || grids[grid].has(tile)) {
                    return false
                }

                rows[r].add(tile)
                cols[c].add(tile)
                grids[grid].add(tile)
            }
        }

        return true
    }
}
