class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {}

        for (let i = 0; i < strs.length; i++) {
            let count = new Array(26).fill(0)
            for (let j = 0; j < strs[i].length; j++) {
                count[strs[i].charCodeAt(j) - 'a'.charCodeAt(0)]++
            }
            let x = JSON.stringify(count)
            if (hash[x] == undefined) {
                hash[x] = [strs[i]]
            } else {
                hash[x].push(strs[i])
            }
        }

        return Object.values(hash)
    }
}
