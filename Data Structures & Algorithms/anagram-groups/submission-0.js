class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = []

        for (let i = 0; i < strs.length; i++) {
            if (this.alreadyInRes(res, strs[i])) continue
            let subRes = [strs[i]]
            for (let j = i + 1; j < strs.length; j++) {
                if (this.isAnagram(strs[i], strs[j])) {
                    subRes.push(strs[j])
                }
            }
            res.push(subRes)
        }

        return res
    }

    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let sMap = this.createMap(s)
        let tMap = this.createMap(t)

        for (const [key, val] of Object.entries(sMap)) {
            if (tMap[key] !== val) return false
        }

        return true
    }

    createMap(s) {
        let map = {}

        for (const char of s) {
            if (map[char] == undefined) {
                map[char] = 1
            } else {
                map[char]++
            }
        }

        return map
    }

    alreadyInRes(res, s) {
        for (let i = 0; i < res.length; i++) {
            for (let j = 0; j < res[i].length; j++) {
                if (res[i][j] == s) return true
            }
        }

        return false
    }
}
