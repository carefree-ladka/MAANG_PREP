class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push = (value) => {
    let newNode = new Node(value);
    newNode.next = newNode;
    this.top = newNode;
    this.size++;
  };

  pop = () => {
    if (this.isEmpty()) return;
    let poppedNode = this.top;
    this.top = poppedNode.next;
    poppedNode.next = null;
    this.size--;
    return poppedNode.data;
  };

  isEmpty = () => this.size === 0;

  peek = () => {
    if (this.isEmpty()) return;
    return this.top.data;
  };
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s.pop());
console.log(s.peek());
