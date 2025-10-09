arr = [4, 6, 3, 1, 9, 7, 2]
# arr = [2,1,3,4,5,6,7]

for i in range(len(arr) - 1):
    isSwap = False
    for j in range(len(arr)- 1 - i):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
            isSwap = True
            print(arr)
    if isSwap == False:
        break
    # print(arr)