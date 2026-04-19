class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = new Array(nums.length).fill(1)
        let pre = 1;
        for (let i = 1; i < nums.length; i++) {
            pre *= nums[i - 1]
            res[i] = pre
        }

        let post = 1
        for (let i = nums.length - 2; i > -1; i--) {
            post *= nums[i + 1]
            res[i] *= post
        }

        return res
    }
}
