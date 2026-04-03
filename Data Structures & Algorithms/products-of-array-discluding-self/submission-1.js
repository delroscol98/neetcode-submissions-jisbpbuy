class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = new Array(nums.length).fill(1)
        let pre = 1
        let post = 1

        res[0] = pre
        for (let i = 1; i < res.length; i++) {
            pre *= nums[i - 1]
            res[i] = pre
        }

        for (let i = res.length - 2; i > -1; i--) {
            post *= nums[i + 1]
            res[i] *= post
        }

        return res

    }
}
