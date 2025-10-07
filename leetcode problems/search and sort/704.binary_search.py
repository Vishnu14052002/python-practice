class Solution(object):
    def search(self, nums, target):
        left = 0
        right = len(nums) - 1
        while right >= left:
            middle = (right + left) / 2
            middle = round(middle)
            if nums[middle] == target:
                return middle
            elif target < nums[middle]:
                right = middle - 1
            else:
                left = middle + 1
        
        return -1

obj = Solution()
nums = [-1,0,3,5,9,12]
target = 0
result = obj.search(nums, target)
print(result)