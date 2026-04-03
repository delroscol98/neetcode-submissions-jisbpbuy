class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        a = self.createMap(s)
        b = self.createMap(t)

        for char, count in a.items():
            if char not in b or count != b[char]:
                return False
        return True
        
    def createMap(self, word: str) -> dict[str,int]:
        d = {}
        for char in word:
            if char not in d:
                d[char] = 0
            d[char] += 1
        return d