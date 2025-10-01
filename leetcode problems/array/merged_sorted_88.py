class Solution(object):
    def merge(self, nums1, m, nums2, n):
        d_nums1 = nums1
        print(d_nums1)
        for i in range(len(d_nums1)):
            if d_nums1[i] == 0:
                d_nums1.pop(i)
        print(d_nums1)       



nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
obj = Solution()
obj.merge(nums1, m, nums2, n)
