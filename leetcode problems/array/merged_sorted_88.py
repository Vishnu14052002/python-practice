class Solution(object):
    def merge(self, nums1, m, nums2, n):
        count = 0
        for i in range(m, (m+n)):
            nums1[i] = nums2[count]
            count = count + 1
        print(nums1)
        nums1.sort()
        




nums1 = [-1,0,0,3,3,3,0,0,0]
m = 6
nums2 = [1,2,2]
n = 3
obj = Solution()
obj.merge(nums1, m, nums2, n)
