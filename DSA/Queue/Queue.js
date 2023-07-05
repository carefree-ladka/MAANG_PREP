class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue = (value) => {
    let newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
      return;
    }
    this.head = newNode;
    this.tail = newNode;
    this.size++;
  };
  dequeue = () => {
    if (!this.head) return;
    this.head = this.head.next;
    if (this.head) {
      this.tail = null;
    }
  };
  isEmpty = () => this.size === 0;
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();

console.log(q);
