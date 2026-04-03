class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash = {}

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i]
            let comp = target - num
            if (hash[comp] == undefined) {
                hash[num] = i
            } else {
                return [hash[comp], i]
            }
        }

        return []
    }
}
