class Solution(object):
    def moveZeroes(self, nums):
        x = 0
        j = 1
        length = len(nums)
        if length == 1:
            return nums
        for i in range(1, len(nums)):
            if nums[i] != 0:
                nums[x] = nums[i]
                x = x + 1
                print(nums) 

        for i in range(x, len(nums)):
            nums[x] = 0
            x = x + 1
            print(nums)



obj = Solution()
nums = [1]
obj.moveZeroes(nums)