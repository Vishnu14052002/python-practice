class Solution(object):
    def merge(self,left, right):
        i = 0
        j = 0
        new_arr = []
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                new_arr.append(left[i])
                i += 1
            else:
                new_arr.append(right[j])
                j += 1
        new_arr = [*new_arr, *left[i:], *right[j:]]
        return new_arr
    def sortArray(self, nums):
        if len(nums) == 1: return nums
        half = len(nums) // 2
        left = self.sortArray(nums[:half])
        right = self.sortArray(nums[half:])
        return self.merge(left, right)

obj = Solution()
nums = [5,2,3,1,10, 7, 4, 0, -100, -13]
result = obj.sortArray(nums)
print(result)
        