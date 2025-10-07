class Solution(object):
    def sortArray(self, nums):
        for i in range(len(nums)):
            min = i
            for j in range(i+1, len(nums)):
                if nums[min] > nums[j]:
                    min = j
            nums[i], nums[min] = nums[min], nums[i]
        return nums
            # return nums


obj = Solution()
nums = [5,1,1,2,0,0]
result = obj.sortArray(nums)
print(result)