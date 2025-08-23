data = open("text.txt", "a")  # r read w write a append
print(data)
# print(data.read())

# data.write("mango \n")
data.write("bye \n")
data.close()

data = open("text.txt", "r+")
print(data.read())
# data.write("loyal") this is not allowed file write operation after operation
