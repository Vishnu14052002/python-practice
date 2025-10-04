class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        count = 0
        max_count = 0
        for i in range(len(nums)):
            if nums[i] == 1:
                count += 1
                print(count)
            
        
            else:
                max_count = count
                count = 0
            
            if i == len(nums)-1:
                if count < max_count:
                    print("max",max_count)
                else:
                    print("count",count)
        
        print(max_count)

obj = Solution()
nums = [1,1,0,1,1,1]
obj.findMaxConsecutiveOnes(nums)