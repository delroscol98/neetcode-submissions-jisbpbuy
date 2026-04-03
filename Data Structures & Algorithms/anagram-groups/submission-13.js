class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let h = {}

        for (const str of strs) {
            let count = new Array(26).fill(0)
            for (let i = 0; i < str.length; i++) {
                count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
            }
            count = JSON.stringify(count)
            if (h[count] == undefined) {
                h[count] = []
            }
            h[count].push(str)
        }

        return Object.values(h)
    }
}
