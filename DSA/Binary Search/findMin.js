const findMin = (arr = []) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = (left + right) >>> 1;
    if (arr[mid] > arr[right]) left = mid + 1;
    else right = mid;
  }
  return arr[left];
};


console.log(findMin([3, 4, 5, 1, 2])); //1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); //0
console.log(findMin([11, 13, 15, 17])); //11
