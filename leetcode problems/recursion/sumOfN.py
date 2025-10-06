
def sumOfN(num):
    if num == 0: return 0
    return num + (sumOfN(num - 1))


num = 5
result = sumOfN(num)
print(result)