class Heap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  peek() {
    if (this.size === 0) {
      return this.heap[0];
    }
  }
  print(message) {
    console.log(`${message}-->`, this.heap);
  }
}

export class MaxHeap extends Heap {
  insert(value) {
    this.heap.push(value);
    this.#heapifyUp();
  }

  extractMax() {
    if (this.size === 0) {
      return null;
    }
    const maxValue = this.heap[0];
    const lastValue = this.heap.pop();
    if (this.size > 0) {
      this.heap[0] = lastValue;
      this.#heapifyDown();
    }
    return maxValue;
  }

  #heapifyUp() {
    let index = this.size - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] >= this.heap[index]) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  #heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.size) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const largerChildIndex =
        rightChildIndex < this.size &&
        this.heap[rightChildIndex] > this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[largerChildIndex] <= this.heap[index]) {
        break;
      }
      this.swap(largerChildIndex, index);
      index = largerChildIndex;
    }
  }
}

export class MinHeap extends Heap {
  insert(value) {
    this.heap.push(value);
    this.#heapifyUp();
  }

  extractMin() {
    if (this.size === 0) {
      return null;
    }
    const minValue = this.heap[0];
    const lastValue = this.heap.pop();
    if (this.size > 0) {
      this.heap[0] = lastValue;
      this.#heapifyDown();
    }
    return minValue;
  }

  #heapifyUp() {
    let index = this.size - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] <= this.heap[index]) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  #heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.size) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const smallerChildIndex =
        rightChildIndex < this.size &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex] >= this.heap[index]) {
        break;
      }
      this.swap(smallerChildIndex, index);
      index = smallerChildIndex;
    }
  }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(15);
minHeap.insert(20);
minHeap.print("MinHeap", minHeap.heap); //[ 5, 10, 15, 20 ]

console.log(minHeap.extractMin()); // Output: 5
console.log(minHeap.extractMin()); // Output: 10
console.log(minHeap.extractMin()); // Output: 15
console.log(minHeap.extractMin()); // Output: 20
console.log(minHeap.extractMin()); // Output: null (heap is empty)

// Usage example
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(5);
maxHeap.insert(15);
maxHeap.insert(20);
maxHeap.print("MaxHeap", maxHeap.heap); //[ 20, 15, 10, 5 ]

console.log(maxHeap.extractMax()); // Output: 20
console.log(maxHeap.extractMax()); // Output: 15
console.log(maxHeap.extractMax()); // Output: 10
console.log(maxHeap.extractMax()); // Output: 5
console.log(maxHeap.extractMax()); // Output: null (heap is empty)
