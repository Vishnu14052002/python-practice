def sumOfArray(n, arr):
    if n == 0: return arr[0]
    return arr[n] + sumOfArray(n-1, arr)
    


arr = [1,3,5,2,1,3]
leng = len(arr) - 1
value = sumOfArray(leng, arr)
print(value)
