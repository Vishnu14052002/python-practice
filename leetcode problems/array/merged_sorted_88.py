class Solution(object):
    def merge(self, nums1, m, nums2, n):
        for i in range(len(nums1)):
            if nums1[i] == 0:
                print(i - i)
                # nums1[i] = nums2[i - i]



nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
obj = Solution()
obj.merge(nums1, m, nums2, n)
