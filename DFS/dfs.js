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
function dfs(root) {
  const stack = [root];
  const result = [];
  while (stack.length) {
    const node = stack.pop();
    result.push(node.value);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return result;
}

console.log(dfs(bst)); //[ 15, 18, 16, 10, 11, 9 ]
