try:
    data = open("text.txt","w")
    print(data)
    data.write("hello \n")
    data.close()
    data = open("text.txt","a+")
    data.write("world")
    data.seek(0)
    print(data.read())
except Exception as e:
    print("File not found", e)
finally:
    print("code executed successfully")
