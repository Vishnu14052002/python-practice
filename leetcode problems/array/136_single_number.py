class Solution(object):
    def singleNumber(self, nums):
        unique = 0
        for num in nums:
            unique ^= num
        print(unique)

obj = Solution()
nums = [4,1,2,1,2]
obj.singleNumber(nums)