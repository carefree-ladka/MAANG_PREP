/* 
Lower Bound searches for the last occurence of a target element in a sorted array. 
If the element is not found, the algorithm returns the position where the target element would be inserted 
to maintain the sorted order
 */

function upperBound(arr = [], target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    let mid = (left + right) >>> 1;
    if (arr[mid] <= target) left = mid + 1;
    else right = mid;
  }
  return left - 1;
}

console.log(upperBound([1, 2, 3, 4, 5], 6));

/* 
  Time Complexity: O(logN)
  Space Complexity : O(1)
*/
