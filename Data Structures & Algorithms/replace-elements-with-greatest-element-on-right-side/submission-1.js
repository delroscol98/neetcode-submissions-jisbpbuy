class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let max = -1
        for (let i = arr.length - 1; i > -1; i--) {
            let curr = arr[i]
            arr[i] = max
            max = Math.max(max, curr)
        }

        return arr
    }
}
