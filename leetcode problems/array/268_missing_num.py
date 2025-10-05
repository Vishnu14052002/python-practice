class Solution(object):
    def missingNumber(self, nums):
        n = len(nums)
        print(n)
        sums = n*(n+1)//2
        print(sum)
        org_sum = sum(nums)
        final = sums - org_sum
        print(final)


obj = Solution()
nums = [3,0,1]
obj.missingNumber(nums)