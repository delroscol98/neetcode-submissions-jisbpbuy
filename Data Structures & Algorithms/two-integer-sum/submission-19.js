class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let h = {}

        for (let i = 0; i < nums.length; i++) {
            let comp = target - nums[i]

            if (h[comp] == undefined) {
                h[nums[i]] = i
            } else {
                return [h[comp], i]
            }
        }

        return []
    }
}
