class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = new Array(nums.length)
        let pre = new Array(nums.length)
        let post = new Array(nums.length)

        pre[0] = 1
        for (let i = 1; i < res.length; i++) {
            pre[i] = nums[i - 1] * pre[i -1] 
        }

        post[post.length - 1] = 1
        for (let i = post.length - 2; i > -1; i--) {
            post[i] = nums[i + 1] * post[i + 1]
        }

        res[0] = post[0]
        res[res.length - 1] = pre[pre.length - 1]
        for (let i = 1; i < res.length - 1; i++) {
            res[i] = pre[i] * post[i]
        }

        return res
    }
}
