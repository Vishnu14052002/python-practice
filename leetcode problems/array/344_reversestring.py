class Solution:
    def reverseString(self, strr):
        strr = list(strr)
        length = int(len(strr)/2)
        p2 = len(strr)-1
        print(p2)
        for i in range(length):
            print(strr[i])
            strr[i], strr[p2] = strr[p2], strr[i]
            print(strr)
            p2 -= 1


obj = Solution()
obj.reverseString('hello')