class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let i = 0
        let j = 0

        while(i<nums.length){
            j = i + 1
            while(j<nums.length){
                if(nums[i]==nums[j]){
                    return true
                } else{
                    j++
                }
            }
            i++
        }
            return false
    }
}
