/*
Stacks are a Last in First out data structure Implementation

Queues are a First in First out data structure Implementation



*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }
    traversal() {
        let count = 0
        let current = this.head
        while (current) {
            // console.log(current)
            count++
            console.log(`Node Value ${current.value},List Length:${count}`)
            current = current.next
        }
    }
    addToStart(argument) {
        let newNode = new Node(argument);
        let temp = this.head;
        if (!(this.head)) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode
            this.head.next = temp
        }
        this.length++
        console.log(`newNode ${newNode.value} has been added to the Front`)
        return this
    }
    addToBack(argument) {
        let newNode = new Node(argument)
        let currentNode = this.head;
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
            this.tail = newNode;
        }
        this.length++
        console.log(`newNode ${newNode.value} has been added to the back`)
        return this
    }
    removeFromBack() {
        let currentNode = this.head
        let currentTail = this.tail;
        if (currentTail === this.head) {
            this.head = null;
            this.tail = null;
            this.length--
            return this
        } else {
            while (currentNode.next.next) {
                currentNode = currentNode.next
            }
            console.log(`${currentNode.value} is being removed`)
            currentNode.next = null
            this.length--
            return this
        }
    }
    removeFromStart() {
        let currentNode = this.head;
        if (currentNode === this.tail) {
            this.tail = null;
            this.head = null;
        } else {
            let temp = this.head.next;
            this.head = temp;
        }
        this.length--
        return this
    }
}

let LL = new LinkedList

console.log("====== ADD To BACK ======")
LL.addToBack(10)
LL.addToBack(9)
LL.addToBack(8)
LL.addToBack(7)
LL.addToBack(6)
LL.addToBack(5)
LL.addToBack(4)
LL.addToBack(3)
LL.addToBack(2)
LL.addToBack(1)

console.log("====== Traversal ======")
LL.traversal()
console.log("====== ADD To START ======")
LL.addToStart('lol')
// console.log("====== REMOVE FROM BACK ======")
// LL.removeFromBack()
// console.log("====== REMOVE FROM Start ======")
//     LL.removeFromStart()
console.log("====== Traversal ======")
LL.traversal()
console.log("====== Overall View of Linked List ======")
console.log(LL)
