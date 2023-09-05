/*
Steps to implement a Hash Table :

1.) Implement a data Structure to hold your data (Array ,linked-List, ect..)
2.) Implement two variables :
        - One mutable variable to act as a counter to hold the total sum
        - One constant variable to act as a *Salt*(Prime Numbers work the best) to have an expected outcome
3.) Implement a Loop that has a constraint that limits its iterations by either the length of the key or a predetermined limit
4.) Subtract the UTF-16 code of the current iteration which is found using the method charCodeAt(0) by 96(lowercase letters within ASCII table) to be a value to be saved in a second constant variable
5.) finally we grab that first mutable variable that is being used as a counter and reassign the value to its previous value Multiplied by the *Salt* plus the value variable and finally that total would then by modulo of current Data structure's Length

1.) Choose a data structure (e.g., array, linked list) to store data.
2.)  Define two variables:
    * Mutable counter for summing (initialized to 0)
    * Constant salt (preferably a prime number) for desired outcome
3.) Set up a loop with a constraint (key length or limit).
4.) Calculate a value by subtracting 96 from the UTF-16 code of the character at the current iteration (charCodeAt(0)).
5.) Update the mutable counter: counter = (counter * salt) + calculated value.
5.)  Compute the final hash: hash = counter % data structure length."

* Trivia *

* Hash tables are collections of key-value pairs
* Hash Tables can find values quickly given a key
* Hash tables can add new key-values quickly
* Hash tables store data in a large array, and work by "hashing"the keys
* A good hash should be fast,distribute keys uniformly, and be deterministic
* Separate chining and linear probing are two strategies used to deal with two keys that hash to the same index

* Big O *

* Insert : O(1)
* Deletion : O(1)
* Access : O(1)

*/


/*
Basic Hash Table

Look up a value by a Key

1.) Hash table has to be fast
2.) Hash table cannot cluster outputs
3.) Hash table always has the same output with a given input
*/

// this function isn't constant time and only hash's strings
const hash = (key, len) => {
    let total = 0;
    for (let character of key) {
        //map "a" to 1,"b" to 2, "c"to 3, etc
        let value = character.charCodeAt(0) - 96;
        // console.log(character, character.charCodeAt())
        total = (total + value) % len;
    }
    return total
}

// console.log("Basic hash function:", hash("pink", 10)) // 0
// console.log("Basic hash function:", hash("orangered", 10)) // 7
// console.log("Basic hash function:", hash("cyan", 10)) // 3


// the hash function employs a small door stop with is iteration to stop at a certain interval

const hashRevisited = (key, len) => {
    let total = 0;

    /*
    Hash's always take advantage of prime numbers to help it reduce collisions and to keep our buckets clean

    for example:  8191(prime number) in a bucket of 10000 had 1.92 collisions where as 8192(even) had a total of 3510 collisions

    */
    let prime = 31;

    // Math.min lets us tell the loop to stop exactly at the length so we don't go any farther then we have to
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let character = key[i];
        let value = character.charCodeAt(0) - 96;
        total = (total * prime + value) % len;
    }
    return total
}

// console.log("Basic hashRevisited function:", hashRevisited("pink", 10)) // 0
// console.log("Basic hashRevisited function:", hashRevisited("orangered", 10)) // 7
// console.log("Basic hashRevisited function:", hashRevisited("cyan", 10)) // 3
// console.log("Basic hashRevisited function:", hashRevisited("hi", 10)) // 7
// console.log("Basic hashRevisited function:", hashRevisited("job", 10)) // 7


/*
Hash Collisions

Collisions are inevitable.

to minimize the amount of collisions

1.) Separate Chaining : At each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list) and this allows us to store multiple key-value pairs at the same index

2.) Linear Probing : When a collisions occurred ,we search through the data structure to find the next empty slot and by doing this allows us to store a single key-value at each index.

*/


// Class Example

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const element = key[i];
            let value = element.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length
        }
        return total
    }
    // Setter : how internally we can safely change or add a value to our table

    /*
    Set Pseudocode

    1.) Accepts a Key and a value
    2.) Hashes the key
    3.) Stores the Key-Value pair in the hash table Array via separate chaining

    */

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
    }

    // Getter : how the client well see the data in the table without mutating the table

    /*
    Get Pseudocode

    1.) Accepts a key
    2.) Hashes the key
    3.) Retrieves the Key-value pair in the hash table

    */

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap.length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    // console.log('Key', this.keyMap[index][i])
                    return this.keyMap[index][i]
                }

            }
        }
        // console.log(undefined)
        return undefined
    }

    values() {
        let returnArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!returnArray.includes(this.keyMap[i][j][1])) {
                        returnArray.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        // console.log("returning Array :", returnArray)
        return returnArray
    }
    keys() {
        let returnArray = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!returnArray.includes(this.keyMap[i][j][0])) {
                        returnArray.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        // console.log("returning Array :", returnArray)
        return returnArray
    }


}

let hT = new HashTable(17);
hT.set("maroon", "#800000")
hT.set("yellow", "#FFFF00")
hT.set("salmon", "#FA8072")
hT.set("olive", "#80800")
hT.set("lightCoral", "#F08080")
hT.set("mediumViolet", "#C71585")
hT.set("plum", "#DDA0DD")
hT.set("plum", "#DDA0DD")
hT.set("purple", "#DDA0DD")
hT.set("violet", "#DDA0DD")

hT.get("olive")
hT.keys()
hT.values()


/*
Hash Tables with a Linked List
*/


class Node {
    constructor(value) {
        // to hold the value of the node
        this.value = value;
        // to hold the length of the value
        this.length = value.length;
        // points to the next node in the bucket
        this.next = null
    }
}

class BucketNode {
    constructor(zone) {
        // to identify bucket
        this.zone = zone
        // points to the next bucket in the list
        this.next = null
        //  to hold node instances that identify with the buckets zone
        this.bucket = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    _hash(key) {
        let total = 0;
        let prime = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const element = key[i];
            let value = element.charCodeAt(0) - 96;
            total += value
        }
        total = ((total * prime) % key.length)
        // console.log("_hash total", total)
        return total
    }
    traverse() {
        let step = 0
        let current = this.head
        while (current) {
            console.log(`Node ${step} Zone, Bucket`, current.zone, current.bucket)
            current = current.next
            step++
        }
    }
    set(key) {
        /*
        We want to hash our current key
        */
        const hashedKey = this._hash(key)
        console.log("Step 1) :hashedKey", hashedKey)

        /*
        We then want to turn our key into a node instance
        */

        const hashNode = new Node(key)
        console.log("Step 2) :hashNode", hashNode)

        /*
        We then want to turn our hashed key value into a BucketNode instance to hold our nodes
        */
        const hashBucketNode = new BucketNode(hashedKey)
        console.log("Step 3) :hashBucketNode", hashBucketNode)

        hashBucketNode.bucket = hashNode;
        //  Our current Head in our list
        let currentHead = this.head
        console.log("Step 3.5 CurrentHead :", currentHead)

        /*
        We want to See if the current head is empty and if so we will populate our first bucket with its initial node
        */
        if (!currentHead) {
            console.log("Step 4.A) :currentHead", currentHead)
            this.head = hashBucketNode
            this.tail = this.head
            this.head.bucket = hashNode
            console.log("Step 4.A1) :this.head", this.head)
            this.length++
            return this

        } else {
            /*
            We want to See if we have an instance of the BucketNode with the same hashed key value
            */
            //    set a variable to keep track of our current bucket
            let currentBucket = null;
            let previousBucket = null;
            //  set up a iterative loop to search for a zone within the list that has a matching zone value

            // console.log(" currentHead.zone:", currentHead.zone)
            // console.log(" hashBucketNode.zone:", hashBucketNode.zone)

            while ((currentHead && hashBucketNode) && currentHead.zone !== hashBucketNode.zone) {
                //  set the current head to the next bucketNode in the list
                //  set the current Bucket to our variable

                // console.log("currentHead49494",currentHead)

                if (currentHead) {

                    console.log("step 4.5 CurrentHead", currentHead)
                    previousBucket = currentHead
                    console.log("step 4.5 previousBucket", previousBucket)
                }
                currentHead = currentHead.next
            }
            if (!currentBucket) {
                // this.tail.next = currentHead
                this.tail = currentHead
                console.log("Previous && Current", previousBucket, currentBucket)

                previousBucket.next = hashBucketNode
                console.log("previousBucket.next: ", previousBucket.next)
                currentBucket = previousBucket.next
                // }
                console.log("Step 4.B) :currentHead", currentHead)

                currentBucket.next = hashNode
                console.log("Step 4.B1) :this.head", this.head)
                this.length++
                return this
            }

        }
    }
}

const link = new linkedList()
console.log("========================================= ")
link.set("Pink")
console.log("========================================= ")
// link.set("Link")
console.log("========================================= ")
// console.log("linked List Function traverse()", link.traverse())
console.log("========================================= ")
link.set("Pinky")
console.log("========================================= ")
// link.set("Linky")
console.log("========================================= ")
link.set("abcdefghijklmnopqrstuvwxyz")
console.log("========================================= ")
console.log("linked List", link)
console.log("========================================= ")
console.log("linked List Function traverse()", link.traverse())
