class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const A = new Node(1);
A.next = new Node(2);
A.next.next = new Node(3);
A.next.next.next = new Node(4);
A.next.next.next.next = new Node(5);
A.next.next.next.next.next = new Node(6);

// 1-->2-->3-->4-->5-->6-->null

function middleElement(list) {
  let slow = list;
  let fast = list;
  while (slow && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.value;
}

console.log(middleElement(A));
