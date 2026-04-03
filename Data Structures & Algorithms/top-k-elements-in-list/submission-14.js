class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {}
        for (const num of nums) {
            if (count[num] == undefined) {
                count[num] = 0
            }
            count[num]++
        }

        let buckets = new Array(nums.length)
        for (const [num, cnt] of Object.entries(count)) {
            if (buckets[cnt] == undefined) {
                buckets[cnt] = []
            }
            buckets[cnt].push(num)
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
