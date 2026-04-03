class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = new Array(nums.length).fill(1)
        
        let pre = 1
        for (let i = 1; i < nums.length; i++) {
            pre *= nums[i - 1]
            res[i] = pre
        }

        let post = 1
        for (let j = nums.length - 2; j > -1; j--) {
            post *= nums[j + 1]
            res[j] *= post
        }

        return res
    }
}
