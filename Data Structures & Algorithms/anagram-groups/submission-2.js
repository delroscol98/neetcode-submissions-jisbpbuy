class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {}

        for (let i = 0; i < strs.length; i++) {
            let charArr = this.createCharCountArr(strs[i])
            if (map[charArr] == undefined) {
                map[charArr] = [strs[i]]
            } else {
                map[charArr].push(strs[i])
            }
        }

        return Object.values(map)
    }

    createCharCountArr(s) {
        let charArr = new Array(26).fill(0)

        for (let i = 0; i < s.length; i++) {
            charArr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
        }

        return charArr
    }
}
