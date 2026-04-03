class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        ht = {}
        for num in nums:
            if num not in ht:
                ht[num] = True
            else:
                return ht[num]
        
        return False