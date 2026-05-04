class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()

        for (const num of nums) {
            if (!map.has(num)) {
                map.set(num, 0)
            }
            map.set(num, map.get(num) + 1)
        }

        let buckets = new Array(nums.length)
        map.forEach((count, num) => {
            if (buckets[count] == undefined) {
                buckets[count] = []
            }
            buckets[count].push(num)
        })

        let res = []
        for (let i = buckets.length - 1; i > -1 && res.length < k; i--) {
            if (buckets[i] != undefined) {
                for (let j = 0; j < buckets[i].length && res.length < k; j++) {
                    res.push(buckets[i][j])
                }
            }
        }

        return res
    }
}
