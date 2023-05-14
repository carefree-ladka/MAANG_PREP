function maxSubArrSum(arr = []) {
  let MAX = Number.MIN_VALUE;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = Math.max(arr[i], sum + arr[i]);
    MAX = Math.max(sum, MAX);
  }
  return MAX;
}

console.log(maxSubArrSum([-2, 4, -1, 6, -2, -1])); //9
