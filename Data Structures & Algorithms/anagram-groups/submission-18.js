class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for (const str of strs) {
            let count = new Array(26).fill(0)
            for (let i = 0; i < str.length; i++) {
                count[str.charCodeAt(i) - 'a'.charCodeAt(0)]++
            }
            count = JSON.stringify(count)

            if (!map.has(count)) {
                map.set(count, [])
            }
            let arr = map.get(count)
            arr.push(str)
        }

        let res = []
        map.forEach((val) => {
            res.push(val)
        })

        return res
    }
}
