class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        count = 0
        max_count = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                count += 1
                print(nums[i])
                print(count)
            
        
            elif max_count < count:
                print(nums[i])
                max_count = count
                count = 0

            if max_count < count:
                print('count inside loop',count)
            elif count < max_count:
                print('max_count inside loop',max_count)
            
        if max_count < count:
            print('count',count)
        elif count < max_count:
            print('max_count',max_count)
        

obj = Solution()
nums = [0]
obj.findMaxConsecutiveOnes(nums)