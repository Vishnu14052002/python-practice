def factorial(num):
    if num == 0: return 0
    return num * factorial(num - 1)


num = 5
result = factorial(num)
print(result)