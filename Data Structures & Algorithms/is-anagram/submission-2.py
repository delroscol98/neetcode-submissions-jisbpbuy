class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        a = {}
        for char in s:
            if char not in a:
                a[char] = 1
            else:
                a[char] += 1

        b = {}
        for char in t:
            if char not in b:
                b[char] = 1
            else:
                b[char] += 1

        for char, count in a.items():
            if char not in b:
                return False
            
            if count != b[char]:
                return False

        return True