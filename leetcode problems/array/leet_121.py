class Solution(object):
    def maxProfit(self, prices):
        min = prices[0]
        profit = 0
        for i in range(1, len(prices)):
            if prices[i]-min > profit:
                profit = prices[i]-min

            if prices[i] < min:
                min = prices[i]
        return profit
        
            



obj = Solution()
obj.maxProfit([7,1,5,3,6,4])