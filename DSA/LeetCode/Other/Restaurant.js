
// Design a wait list for customers at restaurant:

// Add customers to wait list (for example: Bob, party of 4 people)
// Remove a customer from wait list
// Given a open table with N seats, remove and return the first customer party of size less or equal to N



/**
 *  We have a customer(String) and its party(Length)
 *  We have a wait List (Linked list)
 *  We have to remove a customer from the list (remove a node from the Linked list)
 *  Given a populated List ,We have to remove a node and return its value(Customer and their Party Size)
 * We would want to structure this as a Queue (FIFO) as we want to allow people who have waited longer to be removed from the list first
 * We need to implement a shift(First out) and push(to build out our list) function
*/


class customer {
    constructor(value, size = 1) {
        this.value = value
        this.size = size;
        this.next = null;
    }
}

class waitList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }
    traverse(target) {
        let counter = 0
        let currentCustomer = this.head
        while (currentCustomer) {
            if (!target) {
                console.log("Current waiting Customer")
            }
            if (target === counter) {
                return `{Customer:${currentCustomer}},{Current place in list:${counter}}`
            }
            currentCustomer = currentCustomer.next
        }
        return this
    }
    push(name, size) {
        let newCustomer = new customer(name, size)

        // if there is no one in the wait list then the customer will be place on top of the list
        if (!(this.head)) {
            this.head = newCustomer;
            this.tail = newCustomer;
            this.length++;
            return this;
        }

        // if there people in the list then add this customer to the back of the list
        if (this.head) {
            let currentCustomer = this.head;
            let iteration = 0;
            while (iteration !== this.length) {
                currentCustomer = customer.next;
                iteration++;
            }
            currentCustomer.next = newCustomer;
            this.length++;
        }
        return this;
    }

}

let wL = new waitList();

wL.push("robert", 2)
wL.traverse()
