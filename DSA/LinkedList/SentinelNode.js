class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(4);

function removeElements(head, K) {
  const sentinelNode = new Node(null);
  sentinelNode.next = head;
  let prev = sentinelNode;
  let curr = head;
  while (curr) {
    if (curr.value === K) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return sentinelNode.next;
}

console.log(removeElements(head, 2));
