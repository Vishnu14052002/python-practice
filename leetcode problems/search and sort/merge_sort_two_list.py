def sorts(num1, num2):
    fin = [1,2,3,4]

    for i in range(len(fin)-1):
        for j in range(len(fin)-1-i):
            print(i, j)

num1 = [1, 3, 5, 7]
num2 = [2, 4, 8, 9]
sorts(num1, num2)