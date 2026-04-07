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
            let target = nums[i] * -1

            let l = i + 1
            let r = nums.length - 1

            while (l < r) {
                let sum = nums[l] + nums[r]

                if (sum > target) {
                    r--
                } else if (sum < target) {
                    l++
                } else if (sum == target) {
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
