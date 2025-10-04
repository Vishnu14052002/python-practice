class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        count = 0
        max_count = 0

        for i in nums:
            print(i)
            if i == 1:
                print('run')
                count += 1
            
            elif i == 0:
                print('runn')
                if max_count < count:
                    max_count = count
                    count = 0
                else:
                    count = 0
        
        print(max(count, max_count))
            



        

obj = Solution()
nums = [1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1]
obj.findMaxConsecutiveOnes(nums)