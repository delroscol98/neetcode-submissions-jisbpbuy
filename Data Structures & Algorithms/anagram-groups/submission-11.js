class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {}

        for (const str of strs) {
            let count = new Array(26).fill(0)
            for (let i = 0; i < str.length; i++) {
                count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
            }
            if (hash[count] == undefined) {
                hash[count] = [str]
            } else {
                hash[count].push(str)
            }
        }

        return Object.values(hash)
    }
}
