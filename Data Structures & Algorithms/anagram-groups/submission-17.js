class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}
        for (const str of strs) {
            let count = new Array(26).fill(0)
            for (let i = 0; i < str.length; i++) {
                count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
            }
            count = JSON.stringify(count)
            if (map[count] == undefined) {
                map[count] = []
            }
            map[count].push(str)
        }
        
        let res = []
        for (const count in map) {
            if (Object.hasOwn(map, count)) {
                res.push(map[count])
            }
        }

        return res
    }
}
