class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1
        let numberOfZeros = 0
        for (const num of nums) {
            if (num == 0) {
                numberOfZeros++
                continue
            }
            prod *= num
        }

        if (numberOfZeros > 1) {
            return new Array(nums.length).fill(0)
        }

        let res = new Array(nums.length)
        for (let i = 0; i < nums.length; i++) {
            if (numberOfZeros == 1) {
                if (nums[i] == 0) {
                    res[i] = prod
                } else {
                    res[i] = 0
                }
            } else {
                res[i] = prod / nums[i]
            }
        }

        return res
    }
}
