const graph = {
  1: [2, 3],
  2: [4, 5],
  4: [4],
};

function topologicalSort(graph) {
  const vertextLength = Object.keys(graph).length;
  const inDegree = Array(vertextLength).fill(0);
  const result = [];

  for (const u in graph) {
    for (const v of graph[u]) {
      inDegree[v]++;
    }
  }
  const queue = [];
  for (let i = 0; i < vertextLength; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    const u = queue.shift();
    result.push(u);

    for (let v of graph[u]) {
      inDegree[v]--;
      if (inDegree[v] === 0) queue.push(v);
    }
  }

  return result.length === vertextLength ? result : null;
}

console.log(topologicalSort(graph));
