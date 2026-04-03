class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {}

        for (const num of nums) {
            if (map[num] == undefined) {
                map[num] = 1
            } else {
                map[num]++
            }
        }

        let buckets = new Array(nums.length)
        for (const [num, count] of Object.entries(map)) {
            if (!buckets[count]) {
                buckets[count] = [] 
            }

            buckets[count].push(num)   
        }

        let res = []
        for (let i = buckets.length; i > -1; i--) {
            if (buckets[i] !== undefined) {
                for (let j = 0; j < buckets[i].length && res.length < k; j++) {
                    res.push(buckets[i][j])
                }
            }
        }

        return res
    }
}
