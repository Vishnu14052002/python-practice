class Solution:
    def removeDuplicates(self, nums):
        x = 0
        for i in range(len(nums)):
            if nums[x] < nums[i]:
                x += 1
                nums[x] = nums[i]

        return nums[:x+1]
        



nums = [0,1,1,1,2,2,3,3,4]
obj = Solution()
a = obj.removeDuplicates(nums)
print(a)