class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let x = {}
        for (let i = 0; i < nums.length; i++) {
            let comp = target - nums[i]
            if (!(comp in x)) {
                x[nums[i]] = i
            } else {
                return [x[comp], i]
            }
        }

        return []
    }
}
