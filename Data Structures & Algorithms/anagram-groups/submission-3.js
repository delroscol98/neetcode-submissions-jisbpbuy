class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let ht = {}

        for (const word of strs) {
            let arr = new Array(26).fill(0)
            for (const char of word) {
                arr[char.charCodeAt(0) - "a".charCodeAt(0)]++
            }
            if (!(arr in ht)) {
                ht[arr] = []
            }
            ht[arr].push(word)
        }

        return Object.values(ht)
    }
}
