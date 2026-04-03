class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort(function(a,b) {return a - b})

        let res = []

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) continue
            let subTarget = nums[i] * -1

            let l = i + 1
            let r = nums.length - 1

            while (l < r) {
                let sum = nums[l] + nums[r]
                if (sum > subTarget) {
                    r--
                    continue
                }

                if (sum < subTarget) {
                    l++
                    continue
                }

                if (sum == subTarget) {
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
