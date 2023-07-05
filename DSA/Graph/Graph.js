class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addvertext(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

const graph = new Graph();

graph.addvertext("A");
graph.addvertext("B");
graph.addvertext("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

console.log(graph.adjacencyList);
