class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counts = {}

        for (let i = 0; i < nums.length; i++) {
            let curr = nums[i]
            if (counts[curr] == undefined) {
                counts[curr] = 0
            }
            counts[curr]++
        }

        let buckets = new Array(nums.length)
        for (const [num, count] of Object.entries(counts)) {
            if (buckets[count] == undefined) {
                buckets[count] = []
            }
            buckets[count].push(num)
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
