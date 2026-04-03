class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = new Array(nums.length)

        for (let i = 0; i < nums.length; i++) {
            let product = 1
            for (let j = 0; j < nums.length; j++) {
                if (i == j) {
                    continue
                }

                product *= nums[j]
            }
            res[i] = product
        }

        return res
    }
}
