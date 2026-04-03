class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counts = {}
        for (const num of nums) {
            if (counts[num] == undefined) {
                counts[num] = 1
            } else {
                counts[num]++
            }
        }

        let buckets = new Array(nums.length)
        for (const [num, count] of Object.entries(counts)) {
            if (buckets[count] == undefined) {
                buckets[count] = [num]
            } else {
                buckets[count].push(num)
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
