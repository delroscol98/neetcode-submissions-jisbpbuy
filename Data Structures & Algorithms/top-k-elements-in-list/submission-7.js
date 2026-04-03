class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hash = {}
        for (let i = 0; i < nums.length; i++) {
            if (hash[nums[i]] == undefined) {
                hash[nums[i]] = 0
            }
            hash[nums[i]]++
        }

        let buckets = new Array(nums.length)
        for (const [num, count] of Object.entries(hash)) {
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
