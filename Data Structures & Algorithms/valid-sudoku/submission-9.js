class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Map()
        let cols = new Map()
        let grids = new Map()

        for (let r = 0 ; r < 9; r++) {
            rows.set(r, new Set())
            for (let c = 0; c < 9; c++) {
                let curr = board[r][c]
                if (curr == ".") continue

                if (!cols.has(c)) {
                    cols.set(c, new Set())
                }

                let grid = [Math.floor(r / 3), Math.floor(c / 3)]
                grid = JSON.stringify(grid)
                if (!grids.has(grid)) {
                    grids.set(grid, new Set())
                }

                if (
                    rows.get(r).has(curr) ||
                    cols.get(c).has(curr) ||
                    grids.get(grid).has(curr)
                ) {
                    return false
                }

                rows.get(r).add(curr)
                cols.get(c).add(curr)
                grids.get(grid).add(curr)
            }
        }

        return true
    }
}
