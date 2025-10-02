class Solution(object):
    def moveZeroes(self, nums):
        x = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[x] = nums[i]
                x += 1
                print(i,x)
            # print(nums)



obj = Solution()
nums = [0,1,0,3,12]
obj.moveZeroes(nums)