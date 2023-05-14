class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

const bst = new Node(15);
bst.right = new Node(18);
bst.right.left = new Node(16);
bst.left = new Node(10);
bst.left.left = new Node(9);
bst.left.right = new Node(11);

/* 
         15
       /    \
      10    18
      / \   / 
     9  11 16
  
  */
function bfs(root) {
  const queue = [root];
  const result = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node.value);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

console.log(bfs(bst)); //[ 15, 10, 18, 9, 11, 16 ]