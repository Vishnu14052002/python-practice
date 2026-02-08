class Solution:
    def dummy(self, nums, val):
        p1 = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[p1] = nums[i]
                p1 += 1
        print(nums[:p1])




obj = Solution()
val = 2
nums = [0,1,2,2,3,0,4,2]
obj.dummy(nums, val)