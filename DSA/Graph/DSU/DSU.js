class DisjointSet {
  constructor(size) {
    this.parent = new Array(size);
    this.rank = new Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i; // Initialize each element as its own parent
      this.rank[i] = 0; // Initialize the rank of each element as 0
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
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] < this.rank[rootY]) {
        // Attach rootX under rootY since rootY has a higher rank
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        // Attach rootY under rootX since rootX has a higher rank
        this.parent[rootY] = rootX;
      } else {
        // Attach rootY under rootX and increment the rank of rootX
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}

// Example usage:

const ds = new DisjointSet(5);

// Initially, each element is in its own set
// 0, 1, 2, 3, 4 are their own representatives
// [0], [1], [2], [3], [4]
console.log(ds.find(0)); // 0
console.log(ds.find(1)); // 1
console.log(ds.find(2)); // 2
console.log(ds.find(3)); // 3
console.log(ds.find(4)); // 4

// Merge sets containing elements 0 and 1
ds.union(0, 1);
// The representative of both elements will be 0 now
// [0, 1], [2], [3], [4]
console.log(ds.find(0)); // 0
console.log(ds.find(1)); // 0

// Merge sets containing elements 1 and 3
ds.union(1, 3);
// The representative of both elements will be 0 now
// [0, 1, 3], [2], [4]
console.log(ds.find(1)); // 0
console.log(ds.find(3)); // 0

// Merge sets containing elements 2 and 4
ds.union(2, 4);
// The representative of both elements will be 2 now
// [0, 1, 3], [2, 4]
console.log(ds.find(2)); // 2
console.log(ds.find(4)); // 2

// Check if elements are in the same set
console.log(ds.find(0) === ds.find(4)); // false
console.log(ds.find(1) === ds.find(3)); // true
