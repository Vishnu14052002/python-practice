class Solution(object):
    def isPowerOfTwo(self, n):
        if n == 1: return True
        elif n < 1 or (n%2 != 0): return False
        return obj.isPowerOfTwo(n/2)


obj = Solution()
n = 17
result = obj.isPowerOfTwo(n)
print(result)