function twoSum(arr = [], target) {
  if (!arr.length) return;
  let left = 0;
  let right = arr.length - 1;
  const result = [];

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) left++;
    else right--;
  }
  return result;
}

const A = [-2, -1, 0, 0, 1, 2];
console.log(twoSum(A, 0));
