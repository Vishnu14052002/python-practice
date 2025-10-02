class Solution(object):
    def moveZeroes(self, nums):
        x = 0
        for i in range(len(nums)):
            print(i)
            if nums[i] != 0:
                nums[x] = nums[i]
                x += 1
                print(i,x)
            print(nums)



obj = Solution()
nums = [0, 1]
obj.moveZeroes(nums)