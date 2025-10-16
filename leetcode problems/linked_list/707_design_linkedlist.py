class Node:
    def __init__(self, data):
        self.val = data
        self.next = None

class MyLinkedList:

    def __init__(self):
        self.head = None
        

    def get(self, index: int) -> int:
        if index < 0:
            print(-1)
            return -1
        elif index == 0:
            print(self.head.val)
            return self.head.val

        else:
            prev = self.head
            s1 = self.head.next
            for i in range(index-1):
                s1 = s1.next
                prev = prev.next
                if s1 == None:
                    print(-1)
                    return -1
            return s1.val
            print('get ',s1.val)
        
        

    def addAtHead(self, val: int) -> None:
        addAtHead = Node(val)
        addAtHead.next = self.head
        self.head = addAtHead
    
    def traversal(self):
        s1 = self.head
        while s1 is not None:
            print(s1.val)
            s1 = s1.next
        
        

    def addAtTail(self, val: int) -> None:
        addAtTail = Node(val)
        if self.head is None:
            addAtTail.next = self.head
            self.head = addAtTail
        else:
            s1 = self.head.next
            prev = self.head
            while s1 is not None:
                # print(s1.val)
                s1 = s1.next
                prev = prev.next
            prev.next = addAtTail

        

    def addAtIndex(self, index: int, val: int) -> None:
        if index < 0:
            print(-1)

        if index == 0:
            addAtIndex = Node(val)
            addAtIndex.next = self.head
            self.head = addAtIndex
        
        prev = self.head
        s1 = self.head.next
        for i in range(index-1):
            s1 = s1.next
            prev = prev.next
            if s1 == None:
                return -1



        addAtIndex = Node(val)
        addAtIndex.next = s1
        prev.next = addAtIndex


        
        
            
        

    def deleteAtIndex(self, index: int) -> None:
        if index < 0:
            print(-1)
            return -1
        
        elif index == 0:
            s1 = self.head.next
            s2 = s1.next
            self.head = s1
            self.head.next = s2
            return

        elif index == 1:
            prev = self.head
            s1 = self.head.next
            s2 = s1.next
            prev.next = s2
            return

        
        prev = self.head
        s1 = self.head.next
        s2 = s1.next
        for i in range(index-1):
            s1 = s1.next
            prev = prev.next
            s2 = s2.next
            if s1 == None:
                return -1
            elif s2 == None:
                prev.next = None
            else:
                prev.next = s2
        
            

        # print(prev.val, s1.val, s2.val)

            


myLinkedList = MyLinkedList()
res1 = myLinkedList.addAtHead(1)
res2 = myLinkedList.addAtTail(3)
res3 = myLinkedList.addAtIndex(1, 2)
myLinkedList.traversal()
res4 = myLinkedList.get(1)
res5 = myLinkedList.deleteAtIndex(1)
val = myLinkedList.get(1)  
print(res1, res2, res3, res4, res5, val)