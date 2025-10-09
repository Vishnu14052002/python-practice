def sorts(num1, num2):
    fin = num1+num2

    for i in range(len(fin)-1):
        isSwap = False
        for j in range(len(fin)-1-i):
            if fin[j] > fin[j+1]:
                fin[j], fin[j+1] = fin[j+1], fin[j]
                isSwap = True
                print(fin)
        if isSwap == False:
            break
    print(fin)
            

num1 = [1, 3, 5, 7]
num2 = [2, 4, 8, 9]
sorts(num1, num2)