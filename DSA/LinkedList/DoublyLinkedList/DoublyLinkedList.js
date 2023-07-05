class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push = (value) => {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let currTail = this.tail;
    currTail.next = newNode;
    newNode.prev = currTail;
    this.tail = newNode;
    this.size++;
  };

  unshift = (value) => {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    let currHead = this.head;
    newNode.next = currHead;
    currHead.prev = newNode;
    this.head = newNode;
    this.size++;
  };

  shift = () => {
    if (!this.head || !this.tail) return "Empty list";
    let currHead = this.head;
    this.head = currHead.next;
    currHead.prev = null;
    this.size--;
  };

  pop = () => {
    if (!this.head || !this.tail) return "Empty list";
    let currTail = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = currTail.prev;
      this.tail.next = null;
      currTail.prev = null;
    }
    this.size--;
  };

  [Symbol.iterator]() {
    let curr = this.head;
    return {
      next: () => {
        if (curr) {
          const value = curr.value;
          curr = curr.next;
          return {
            value,
            done: false,
          };
        }
        return { done: true };
      },
    };
  }
}

const dll = new DoublyLinkedList();

dll.push(1);
dll.push(2);
dll.push(3);
dll.push(4);
dll.unshift(10);
dll.shift();
dll.pop();
console.log(dll.head);
console.log("size", dll.size);

for (const item of dll) {
  console.log(item);
}
