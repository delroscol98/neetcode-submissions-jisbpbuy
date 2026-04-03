class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b)

        let res = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) continue
            let targetSum = nums[i] * -1

            let l = i + 1
            let r = nums.length - 1

            while (l < r) {
                let sum = nums[l] + nums[r]

                if (sum > targetSum) {
                    r--
                    continue
                }

                if (sum < targetSum) {
                    l++
                    continue
                }

                if (sum == targetSum) {
                    res.push([nums[i], nums[l], nums[r]])
                    l++
                    r--

                    while (l < r && nums[l] == nums[l - 1]) {
                        l++
                    }

                    while (l < r & nums[r] == nums[r + 1]) {
                        r--
                    }
                }
            }
        }

        return res
    }
}
