class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = this.createMap(nums)

        let sorted = Object.entries(map).sort((a,b) => b[1] - a[1])

        let res = []
        for (let i = 0; i < sorted.length && res.length !== k; i++) {
            res.push(sorted[i][0])
        }

        return res
    }

    createMap(nums) {
        let map = {}

        for (const num of nums) {
            if (map[num] == undefined) {
                map[num] = 1
            } else {
                map[num]++
            }
        }

        return map
    }
}
