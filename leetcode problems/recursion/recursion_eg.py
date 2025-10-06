def sumOfN(num):
    if num == 0: return
    print(num)
    num -= 1
    sumOfN(num)

num = 10
sumOfN(num)
    