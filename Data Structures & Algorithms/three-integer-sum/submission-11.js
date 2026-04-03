class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = []
        nums = nums.sort((a,b) => a - b)

        let aSet = new Set()
        for (let a = 0; a < nums.length; a++) {
            if (aSet.has(nums[a])) continue
            aSet.add(nums[a])

            let bSet = new Set()
            for (let b = a + 1; b < nums.length; b++) {
                if (bSet.has(nums[b])) continue
                bSet.add(nums[b])

                let cSet = new Set()
                for (let c = b + 1; c < nums.length; c++) {
                    if (cSet.has(nums[c])) continue
                    cSet.add(nums[c])

                    let sum = nums[a] + nums[b] + nums[c]
                    if (sum == 0) {
                        res.push([nums[a], nums[b], nums[c]])
                    }
                }
            }
        }

        return res
    }
}
