class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b)

        let res = []
        for (let l = 0; l < nums.length; l++) {
            if (nums[l] == nums[l - 1]) continue

            let m = l + 1
            let r = nums.length - 1
            while (m < r) {
                let sum = nums[l] + nums[m] + nums[r]
                if (sum > 0) {
                    r--
                } else if (sum < 0) {
                    m++
                } else {
                    res.push([nums[l], nums[m], nums[r]])
                    m++
                    r--

                    while (m < r && nums[m] == nums[m - 1]) {
                        m++
                    }

                    while (m < r && nums[r] == nums[r + 1]) {
                        r--
                    }
                }
            }
        }

        return res
    }
}
