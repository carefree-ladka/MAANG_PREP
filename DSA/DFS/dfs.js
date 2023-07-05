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

// console.log(dfs(bst)); //[ 15, 18, 16, 10, 11, 9 ]

//InOrder -> Left ->Root->Right
//PreOrder -> Root->Left ->Right
//PostOrder -> Left ->Right->Root

function inOrder(node) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

// inOrder(bst);

function preOrder(node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
}

// preOrder(bst);

function postOrder(node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
}

// postOrder(bst);

//Iterative approahces

function inOrderIterative(node) {
  const stack = [];
  const result = [];
  let current = node;
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.value);
    current = current.right;
  }
  return result;
}

function preOrderIterative(node) {
  if (!node) return;
  const stack = [node];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
}

function postOrderIterative(node) {
  if (!node) return;
  const stack = [node];
  const result = [];
  while (stack.length > 0) {
    const current = stack.pop();
    result.unshift(current.value);
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  return result;
}

function morrisInOrderTraversal(node) {
  const result = [];
  let current = node;
  while (current) {
    if (!current.left) {
      result.push(current.value);
      current = current.right;
    } else {
      let predecessor = current.left;
      while (predecessor.right && predecessor.right !== current) {
        predecessor = predecessor.right;
      }
      if (!predecessor.right) {
        predecessor.right = current;
        current = current.left;
      } else {
        predecessor.right = null;
        result.push(current.value);
        current = current.right;
      }
    }
  }
  return result;
}

function morrisPreOrderTraversal(node) {
  const result = [];
  let current = node;
  while (current) {
    if (!current.left) {
      result.push(current.value);
      current = current.right;
    } else {
      let predecessor = current.left;
      while (predecessor.right && predecessor.right !== current) {
        predecessor = predecessor.right;
      }
      if (!predecessor.right) {
        result.push(current.value);
        predecessor.right = current;
        current = current.left;
      } else {
        predecessor.right = null;
        current = current.right;
      }
    }
  }
  return result;
}

function findPredecessor(root) {
  let node = root;
  while (node.right && node.right !== current) {
    node = node.right;
  }
  return node;
}

// console.log(morrisInOrderTraversal(bst));
// console.log(morrisPreOrderTraversal(bst));

//Morris Traversal - flatten tree
function mit(node) {
  let curr = node;
  while (curr) {
    if (curr.left) {
      let predecessor = curr.left;
      let leftPtr = curr.left;
      while (predecessor.right) predecessor = predecessor.right;
      temp.right = curr;
      curr.left = null;
      curr = leftPtr;
    } else {
      console.log(curr.value);
      curr = curr.right;
    }
  }
}

mit(bst);
