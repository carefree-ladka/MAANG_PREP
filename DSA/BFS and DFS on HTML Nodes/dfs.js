const parent = document.querySelector("#parent");

function dfsOnHTMLNodes(node) {
  console.log("dfs", node.tagName);
  for (let i = 0; i < node.children.length; i++) {
    dfsOnHTMLNodes(node.children[i]);
  }
}

dfsOnHTMLNodes(parent);
/* 
DIV 
DIV
P
P
P
DIV
SPAN
SPAN
SPAN
*/

function bfsOnHTMLNodes(node) {
  const queue = [node];
  while (queue.length) {
    const temp = queue.shift();
    console.log("bfs", temp.tagName);
    for (let i = 0; i < temp.children.length; i++) {
      queue.push(temp.children[i]);
    }
  }
}

bfsOnHTMLNodes(parent);
/* 
DIV 
DIV
DIV
SPAN
P
P
P
SPAN
SPAN
*/
