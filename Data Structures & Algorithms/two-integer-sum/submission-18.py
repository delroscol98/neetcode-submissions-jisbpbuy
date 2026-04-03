class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for i, num in enumerate(nums):
            comp = target - num

            if comp not in d:
                d[num] = i
            else:
                return [d[comp], i]
        return []