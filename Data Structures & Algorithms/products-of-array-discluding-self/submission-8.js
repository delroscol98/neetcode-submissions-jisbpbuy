class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length

        let forward = new Array(n).fill(1)

        for (let i = 1; i < n; i++) {
            forward[i] = nums[i - 1] * forward[i - 1]
        }

        let backward = new Array(n).fill(1)
        for (let j = n - 2; j > -1; j--) {
            backward[j] = nums[j + 1] * backward[j + 1]
        }

        let res = new Array(n)
        for (let k = 0; k < n; k++) {
            res[k] = forward[k] * backward[k]
        }

        return res
    }
}
