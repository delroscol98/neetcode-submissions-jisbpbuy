class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frqs = {}
        for (const num of nums) {
            if (frqs[num] == undefined) {
                frqs[num] = 0
            }
            frqs[num]++
        }

        let buckets = new Array(nums.length)
        for (const num in frqs) {
            if (Object.hasOwn(frqs, num)) {
                let idx = frqs[num]
                if (buckets[idx] == undefined) {
                    buckets[idx] = []
                }
                buckets[idx].push(num)
            }
        }

        let res = []
        for (let i = buckets.length - 1; i > -1; i--) {
            if (buckets[i] != undefined) {
                for (let j = 0; j < buckets[i].length && res.length < k; j++) {
                    res.push(buckets[i][j])
                }
            }
        }

        return res
    }
}
