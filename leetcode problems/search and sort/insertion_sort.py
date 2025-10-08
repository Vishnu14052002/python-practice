def insertionSort(nums):
    for i in range(1, len(nums)):
        current = i
        prev = i - 1
        while(nums[current] < nums[prev] and prev >= 0):
            nums[current], nums[prev] = nums[prev], nums[current]
            current -= 1
            prev -= 1
            print(nums)


nums = [3,2,1,5,9,6,10,4, -10, -20, 40, 199, -2000]
insertionSort(nums)
