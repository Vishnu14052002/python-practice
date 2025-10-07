class Solution(object):
    def fib(self, n):
        if n <= 1: return n
        # if n == 1: return 1
        return self.fib(n - 2) + self.fib(n-1)

obj = Solution()
n = 4
result = obj.fib(n)
print(result)