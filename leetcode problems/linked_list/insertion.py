class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SinglyLL:
    def __init__(self):
        self.head = None
    
    def traversal(self):
        if self.head is None:
            print('There is nothing')
        else:
            s1 = self.head
            while s1 is not None:
                print(s1.data)
                s1 = s1.next
    def insertion(self, data):
        nb = Node(data)
        nb.next = self.head
        self.head = nb
    def insertion_at_end(self, data):
        ne = Node(data)
        a = self.head
        while a.next is not None:
            a = a.next
        a.next = ne

    
sl = SinglyLL()
n1 = Node(10)
sl.head = n1
n2 = Node(20)
n3 = Node(30)
n4 = Node(40)
n1.next = n2
n2.next = n3
n3.next = n4

sl.traversal()
sl.insertion(1)
sl.traversal()
sl.insertion_at_end(50)
sl.traversal()