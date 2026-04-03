class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for (const str of strs) {
            let count = new Array(26).fill(0)
            for (const char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            
            if (!(count in map)) {
                map[count] = [str]
            } else {
                map[count].push(str)
            }
        }

        let res = []
        for (const key in map) {
            res.push(map[key])
        }

        return res
    }
}
