function binarySearch(arr = [], K) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = (left + right) >>> 1;
    if (arr[mid] === K) return mid;
    else if (arr[mid] > K) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));

/* 
Time Complexity: O(logN)
Space Complexity : O(1)
*/
