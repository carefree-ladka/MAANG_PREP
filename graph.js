const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  E: [],
};

function dfs(graph, start) {
  const stack = [start];
  const visited = {};
  visited[start] = true;
  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node);
    graph[node]?.forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        stack.push(neighbour);
      }
    });
  }
}

function bfs(graph, start) {
  const queue = [start];
  const visited = {};
  visited[start] = true;
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node);
    graph[node]?.forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        queue.push(neighbour);
      }
    });
  }
}

function shortestPath(graph, startNode, endNode) {
  const queue = [
    {
      node: startNode,
      path: [],
    },
  ];
  const visited = {};
  visited[startNode] = true;
  while (queue.length > 0) {
    const { node, path } = queue.shift();
    if (node === endNode) {
      return [...path, node].join("->");
    }
    graph[node]?.forEach((neighbour) => {
      if (!visited[neighbour]) {
        queue.push({
          node: neighbour,
          path: [...path, node],
        });
        visited[neighbour] = true;
      }
    });
  }
  return -1;
}

// dfs(graph, "A");
// console.log();
// bfs(graph, "A");

console.log(shortestPath(graph, "A", "F")); //[ 'A', 'C', 'F' ]
