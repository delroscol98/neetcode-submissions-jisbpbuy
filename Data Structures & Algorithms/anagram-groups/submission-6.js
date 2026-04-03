class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length == 1) {
            return [strs]
        }

        let hash = {}
        for (let i = 0; i < strs.length; i++) {
            let curr = strs[i]
            let count = new Array(26).fill(0)

            for (let j = 0; j < curr.length; j++) {
                count[curr.charCodeAt(j) - 'a'.charCodeAt(0)]++
            }
            if (hash[JSON.stringify(count)] == undefined) {
                hash[JSON.stringify(count)] = []
            }
            hash[JSON.stringify(count)].push(curr)
        }

        return Object.values(hash)
    }
}
