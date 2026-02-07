class Solution:
    def dummy(self, nums):
        p1 = 0
        for i in range(len(nums)):
            if nums[p1] < nums[i]:
                p1 += 1
                nums[p1] = nums[i]
                
            print(p1+1)



obj = Solution()
nums = [0,0,1,1,1,2,2,3,3,4]
obj.dummy(nums)