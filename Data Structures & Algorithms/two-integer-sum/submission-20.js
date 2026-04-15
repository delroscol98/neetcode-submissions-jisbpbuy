class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}

        for (let i = 0; i < nums.length; i++) {
            let comp = target - nums[i]

            if (map[comp] == undefined) {
                map[nums[i]] = i
            } else {
                return [map[comp], i]
            }
        }

        return []
    }
}
