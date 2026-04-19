class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let pre = new Array(nums.length).fill(1)
        for (let i = 1; i < nums.length; i++) {
            pre[i] = nums[i - 1] * pre[i - 1]
        }

        let post = new Array(nums.length).fill(1)
        for (let i = nums.length - 2; i > -1; i--) {
            post[i] = nums[i + 1] * post[i + 1]
        }

        let res = new Array(nums.length)
        for (let i = 0; i < nums.length; i++) {
            res[i] = pre[i] * post[i]
        }

        return res
    }
}
