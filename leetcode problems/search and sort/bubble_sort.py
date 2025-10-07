arr = [4, 6, 3, 1, 9, 7, 2]
# arr = [1,2,3,4]

for i in range(len(arr) - 1):
    for j in range(len(arr)- 1 - i):
        if arr[j] > arr[j+1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
    print(arr)