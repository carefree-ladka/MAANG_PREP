class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  push = (value) => {
    let newNode = new Node(value);
    if (!this.head) this.head = newNode;
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  };
}

const list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

function reverseLinkedList(head) {
  let curr = head;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

console.log(JSON.stringify(reverseLinkedList(list.head), null, 4));
