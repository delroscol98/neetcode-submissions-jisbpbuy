class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        h = {}
        for num in nums:
            if num not in h:
                h[num] = True
            else:
                return True
        return False