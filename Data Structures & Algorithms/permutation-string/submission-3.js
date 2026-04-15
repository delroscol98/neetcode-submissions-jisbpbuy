class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s2.length < s1.length) return false
        let A = s1
        let B = s2

        let ACountMap = {}
        for (const char of A) {
            if (ACountMap[char] == undefined) {
                ACountMap[char] = 0
            }
            ACountMap[char]++
        }

        let l = 0
        let r = 0

        let BCountMap = {}
        while (r < B.length) {
            let windowLength = 0
            while (r < B.length && windowLength < A.length) {
                windowLength = r - l + 1
                if(BCountMap[B[r]] == undefined) {
                    BCountMap[B[r]] = 0
                }
                BCountMap[B[r]]++
                r++
            }

            if (this.isAnagram(ACountMap, BCountMap)) {
                return true
            }

            if (BCountMap[B[l]] == 1) {
                BCountMap[B[l]] = undefined
            } else {
                BCountMap[B[l]]--
            }
            l++

        }
        return false
    }

    isAnagram(map1, map2) {
        for (const [char, count] of Object.entries(map1)) {
            if (count != map2[char]) {
                return false
            }
        }

        return true
    }
}
