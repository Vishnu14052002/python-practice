# open("text.txt")

# data = open("text.txt")
# print(data)
# print(data.read())

# data = open("text.txt")
# data.write("world")


# data = open("text.txt", "w")
# data.write("world")
# data.close()


# data = open("text.txt", "a")
# data.write("world")


# data = open("text.txt", "a+")
# data.write("world")
# data.read()


data = open("text.txt", "a+")
data.write("world")
data.seek(0)
print(data.read())
data.close()

data = open("text.txt")
print(data.read())
data.close()

# print(data.read())
