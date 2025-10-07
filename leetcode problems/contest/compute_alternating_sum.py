class Solution(object):
    def alternatingSum(self, nums):
        value = 0
        for i in range(len(nums)):
            
            if i < len(nums):
                if i % 2 == 0:
                    value = value + nums[i]
                else:
                    value = value - nums[i]
            if i == len(nums)-1:
                return value
            # print(value)
  


obj = Solution()
nums = [1,3,5,7]
value = obj.alternatingSum(nums)
print(value)
