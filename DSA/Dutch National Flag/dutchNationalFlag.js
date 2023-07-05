function swap(arr, A, B) {
  [arr[A], arr[B]] = [arr[B], arr[A]];
}

function dutchNationalFlag(arr = []) {
  if (!arr.length) return [];
  let low = 0;
  let mid = 0;
  let right = arr.length - 1;
  while (mid <= right) {
    if (arr[mid] === 0) {
      swap(arr, mid, low);
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      swap(arr, mid, right);
      right--;
    }
  }
  return arr;
}

console.log(dutchNationalFlag([0, 1, 2, 1, 0, 2])); //[ 0, 0, 1, 1, 2, 2 ]
