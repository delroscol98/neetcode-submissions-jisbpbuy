class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashmap = {}

        for (let i = 0 ; i < nums.length; i++) {
            let comp = target - nums[i]
            if (hashmap[comp] != undefined) {
                return [hashmap[comp], i]
            }

            hashmap[nums[i]] = i
        }
    }
}
