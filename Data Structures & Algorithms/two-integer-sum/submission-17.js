class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {}

        for (let i = 0; i < nums.length; i++) {
            let comp = target - nums[i]
            if (hash[comp] == undefined) {
                hash[nums[i]] = i
            } else {
                return [hash[comp], i]
            }
        }

        return []
    }
}
