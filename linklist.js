function Node(val) {
    this.data = val
    this.next = null
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null
    }
    add(val) {
        let node = new Node(val)
        if (this.head == null) {
            this.head = node
        } else {
            let currentNode = this.head
            // this.head: 1->2>3->null
            // current : 1->2->3->null
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this.size++
    }
    printList() {
        var curr = this.head;
        var arr = [];
        while (curr) {
            arr.push(curr.data)
            curr = curr.next;
        }
        console.log(arr);
    }
    removeElement(element) {
        var current = this.head;
        var prev = null;
        while (current) {
            if (current.data === element) {
                if (prev) {
                    // Xóa node hiện tại khỏi linked list
                    prev.next = current.next;
                    current = current.next;
                } else {
                    // Nếu prev là null, tức là current đang trỏ đến head
                    // Cần phải cập nhật head mới của linked list
                    this.head = current.next;
                    current = this.head;
                }
            } else {
                prev = current;
                current = current.next
            }
        }
        return prev;
    }
    deleteDuplicates = function () {
        let prev = null
        let current = this.head
        while (current) {
            if (prev) {
                if (prev.val === current.val) {
                    prev.next = current.next
                    current = current.next
                } else {
                    prev = current
                    current = current.next
                }
            } else {
                prev = current
                current = current.next
            }
        }
        return this.head
    }
}

let insLL = new LinkedList()
insLL.add(1)
insLL.add(2)
insLL.add(2)
insLL.add(3)
insLL.add(4)
insLL.add(5)
insLL.add(5)
// insLL.removeElement(6)
insLL.printList()
