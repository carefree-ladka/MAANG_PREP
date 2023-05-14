function findNSum(arr, target, N, start) {
  const result = [];
  if (N === 2) {
    let left = start;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        result.push([arr[left], arr[right]]);
        while (left < right && arr[left] === arr[left + 1]) left++; //skip duplicates
        while (left < right && arr[right] === arr[right - 1]) right--; //skip duplicates
        left++;
        right--;
      } else if (sum < target) left++;
      else right--;
    }
  } else {
    for (let i = start; i < arr.length - N + 1; i++) {
      if (i > start && arr[i] === arr[i - 1]) continue; //skip duplicates
      const subResult = findNSum(arr, target - arr[i], N - 1, i + 1);
      for (let item of subResult) {
        result.push([arr[i], ...item]);
      }
    }
  }
  return result;
}

function NSum(arr = [], target, N) {
  arr.sort((a, b) => a - b);
  return findNSum(arr, target, N, 0);
}

const A = [1, 0, -1, 0, -2, 2];

console.log(NSum(A, 0, 4)); //[ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]

/* 
Time Complexity: O(NlogN + N^(N-1))
Space Complexity: O(N+ N^2)
*/
