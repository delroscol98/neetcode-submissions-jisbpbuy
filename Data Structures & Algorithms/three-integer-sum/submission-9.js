class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums = nums.sort((a,b) => a - b)

        let res = new Set()

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === nums[i - 1]) continue

            let j = i + 1
            let k = nums.length - 1

            while (j < k) {
                const sum = nums[i] + nums[j] + nums[k]

                if (sum < 0) {
                    j++
                } else if (sum > 0) {
                    k--
                } else {
                    res.add(JSON.stringify([nums[i], nums[j], nums[k]]))
                    j++
                    k--

                    while (j < k && nums[j] == nums[j - 1]) {
                        j++
                    }

                    while (j < k && nums[k] == nums[k + 1]) {
                        k--
                    }
                }
            }
        }

        return Array.from(res).map(el => JSON.parse(el))
    }
}
