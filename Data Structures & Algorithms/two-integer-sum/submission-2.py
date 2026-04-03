class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        ht = {}
        for i in range(len(nums)):
            comp = target - nums[i]

            if comp not in ht:
                ht[nums[i]] = i
            else:
                return [ht[comp], i]
        
        return []