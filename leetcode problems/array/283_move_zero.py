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
        print(x)
        for i in range(x, len(nums)):
            nums[i] = 0
            print(nums)



obj = Solution()
nums = [0, 1]
obj.moveZeroes(nums)