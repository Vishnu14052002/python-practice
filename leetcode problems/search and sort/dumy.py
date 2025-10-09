class Solution(object):
    def maxProfit(self, prices):
        max_profit = 0
        curr_profit = 0
        if len(prices) <= 1:
            return 0
        if len(prices) <= 2:
            max_profit = prices[1] - prices[0]
            if max_profit < 0:
                return 0
            else:
                return max_profit
        elif len(prices) > 2:
            for i in range(len(prices)- 1):
                for j in range(i + 1, len(prices) ):
                    print(i, j)
                    curr_profit = prices[j] - prices[i]
                    if curr_profit > max_profit:
                        max_profit = curr_profit
            return max_profit
        if max_profit < 0:
            return 0
        
obj = Solution()
prices = [1,2,4]
result = obj.maxProfit(prices)
print(result)