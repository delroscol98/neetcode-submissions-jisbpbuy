class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b)

        let res = []

        let iSet = new Set()
        for (let i = 0; i < nums.length - 2; i++) {
            if (iSet.has(nums[i])) continue
            iSet.add(nums[i])

            let jSet = new Set()
            for (let j = i + 1; j < nums.length - 1; j++) {
                if (jSet.has(nums[j])) continue
                jSet.add(nums[j])
                
                let kSet = new Set()
                for (let k = j + 1; k < nums.length; k++) {
                    if (kSet.has(nums[k])) continue
                    kSet.add(nums[k])

                    let sum = nums[i] + nums[j] + nums[k]

                    if (sum === 0) res.push([nums[i], nums[j], nums[k]])
                }
            }
        }

        return res
    }
}
