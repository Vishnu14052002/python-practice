def merge(left, right):
    i = 0
    j = 0
    new_arr = []
    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            new_arr.append(left[i])
            i += 1
        else:
            new_arr.append(right[j])
            j += 1
    new_arr = [*new_arr, *left[i:], *right[j:]]
    return new_arr

left = [2,5,9,10] 
right = [1,3,6,8]
result = merge(left, right)
print(result)