class Solution:
    def dummy(self, nums1, nums2, m, n):
        dnum1 = nums1
        p1 = 0
        p2 = 0
        for i in range(len(nums1)):
            if dnum1[p1] < nums2[p2]:
                nums1[i] = dnum1[p1]
                p1 += 1
            
            if dnum1[p1] > nums2[p2]:
                nums1[i] = nums2[p2]
                p2 += 1

        print(nums1)




obj = Solution()
nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3

obj.dummy(nums1, nums2, m, n)

