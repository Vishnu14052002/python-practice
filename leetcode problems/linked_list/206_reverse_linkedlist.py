class Node():
    def __init__(self, val):
        self.val = val
        self.next = None
    
class MyLinkedList():
    def __init__(self):
        self.head = None

    def addAtTop(self, val):
        addAtTop = Node(val)
        addAtTop.next = self.head
        self.head = addAtTop

    def addAtTail(self, val):
        if self.head is None:
            self.addAtTop(val)
        
        else:
            addAtTail = Node(val)
            s1 = self.head
            while s1.next is not None:
                s1 = s1.next
            s1.next = addAtTail
        
    def addAtIndex(self, val):
        if val < 0:
            return
        
        if val == 0:
            self.addAtTop(val)
            return
        
        prev = self.head
        s1 = prev.next
        nextt = s1.next
        


    def traverse(self):
        s1 = self.head
        while s1 is not None:
            print(s1.val)
            s1 = s1.next
    


LL = MyLinkedList()
LL.addAtTop(30)
LL.addAtTop(20)
LL.addAtTop(10)
LL.addAtTail(100)
LL.addAtTail(200)
LL.addAtIndex(2)
LL.traverse()