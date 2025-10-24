class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.size = 0

    def addAtHead(self, val):
        newNode = Node(val)
        newNode.next = self.head
        self.head = newNode
        self.size += 1

    def traverse(self):
        curr = self.head
        while curr is not None:
            # print(curr.val)
            curr = curr.next
    
    def middleNode(self):
        slow = self.head
        fast = self.head
        while fast != None and fast.next != None:
            slow = slow.next
            fast = fast.next.next
            print(slow.val)
        return slow.val

        


LL = LinkedList()
# LL.addAtHead(10)
LL.addAtHead(9)
LL.addAtHead(8)
LL.addAtHead(7)
LL.addAtHead(6)
LL.addAtHead(5)
LL.addAtHead(4)
LL.addAtHead(3)
LL.addAtHead(2)
LL.addAtHead(1)
# LL.traverse()
value = LL.middleNode()
print(value)