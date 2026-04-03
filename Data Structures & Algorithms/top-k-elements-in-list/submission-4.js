class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let ht = {}
        for (const num of nums) {
            if (!(num in ht)) {
                ht[num] = 0
            }
            ht[num]++
        }

        let buckets = new Array(nums.length)
        for (const [num, count] of Object.entries(ht)) {
            if (!(count in buckets)) {
                buckets[count] = []
            }
            buckets[count].push(num)
        }

        let res = []
        for (let i = buckets.length - 1; i >= 0; i--) {
            if (buckets[i]) {
                for (let j = 0; j < buckets[i].length && res.length < k; j++) {
                    res.push(buckets[i][j])
                }
            }
        }

        return res
    }
}
