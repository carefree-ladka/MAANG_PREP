class CyclicSort {
  static cs(arr = []) {
    let i = 0;
    while (i < arr.length) {
      const j = arr[i] - 1;
      if (arr[i] !== arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else i++;
    }
    return arr;
  }
}

const cs = new CyclicSort();
console.log(CyclicSort.cs([5, 1, 4, 6, 2, 3]));

/* 
Time Complexity : O(N) [On average]
Space Complexity: O(1)
*/
