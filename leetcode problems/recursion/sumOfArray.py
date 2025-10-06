def sumOfArray(n, arr):
    if n == 0: return arr[0]
    if arr[n] % 2 == 0:
        pass
    else:
        return arr[n] + sumOfArray(n-1, arr)
    


arr = [1,3,5,2,1,3]
leng = len(arr) - 1
value = sumOfArray(leng, arr)
print(value)
