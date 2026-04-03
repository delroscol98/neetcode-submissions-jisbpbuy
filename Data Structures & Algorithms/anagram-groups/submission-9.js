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
            let x = JSON.stringify(count)
            if (hash[x] == undefined) {
                hash[x] = [str]
            } else {
                hash[x].push(str)
            }
        }

        return Object.values(hash)
    }
}
