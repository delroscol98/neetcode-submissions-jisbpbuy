class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b)

        let len = nums.length
        let res = []
        for (let i = 0; i < len; i++) {
            if (nums[i] == nums[i - 1]) continue

            let l = i + 1
            let r = len - 1

            while (l < r) {
                let sum = nums[i] + nums[l] + nums[r]

                if (sum > 0) {
                    r--
                } else if (sum < 0) {
                    l++
                } else if (sum == 0) {
                    res.push([nums[i], nums[l], nums[r]])
                    l++
                    r--

                    while (l < r && nums[l] == nums[l - 1]) {
                        l++
                    }

                    while (l < r && nums[r] == nums[r + 1]) {
                        r--
                    }
                }
            }
        }

        return res
    }
}
