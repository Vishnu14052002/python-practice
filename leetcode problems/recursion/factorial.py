def factorial(num):
    if num == 1: return 1
    return num * factorial(num - 1)


num = 3
result = factorial(num)
print(result)