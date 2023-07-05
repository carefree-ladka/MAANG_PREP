class DisjointSet {
  constructor(size) {
    this.parent = new Array(size);
    this.rank = new Array(size); // Initialize each element as a separate set
    for (let i = 0; i <= size; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      // Path compression - set the parent directly to the root
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    let xRoot = this.find(x);
    let yRoot = this.find(y);
    if (xRoot === yRoot) {
      // The vertices are already in the same set, so adding an edge will form a cycle
      return true;
    } // Attach the smaller rank tree under the root of the higher rank tree
    if (this.rank[xRoot] < this.rank[yRoot]) {
      this.parent[xRoot] = yRoot;
    } else if (this.rank[xRoot] > this.rank[yRoot]) {
      this.parent[yRoot] = xRoot;
    } else {
      // If ranks are the same, make one as the root and increment its rank
      this.parent[yRoot] = xRoot;
      this.rank[xRoot]++;
    }
    return false;
  }
}

function hasCycle(graph) {
  const dsu = new DisjointSet(graph.length);
  for (const [u, v] of graph) {
    if (dsu.union(u, v)) {
      return true; // Cycle detected
    }
  }
  return false; // No cycle detected
}

// Example usage:

const graph1 = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 1],
];
console.log(hasCycle(graph1)); // true

const graph2 = [
  [1, 2],
  [2, 3],
  [3, 4],
];

console.log(hasCycle(graph2)); // false
