
def sumOfN(x,num):
    if x == num: return
    print(x)
    x += 1
    sumOfN(x, num)


num = 10
sumOfN(0,num)
    