class Solution(object):
    def moveZeroes(self, nums):
        x = 0
        j = 1
        for i in range(1, len(nums)):
            if nums[i] != 0:
                nums[x] = nums[i]
                x = x + 1
                print(nums) 
            else:
                



obj = Solution()
nums = [0,1,0,3,12]
obj.moveZeroes(nums)