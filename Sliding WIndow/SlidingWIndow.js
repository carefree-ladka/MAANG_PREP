function slidingWindow(arr = [], K) {
  let sum = 0;
  let total;
  for (let i = 0; i < K; i++) sum += arr[i];
  total = sum;
  for (let j = K; j < arr.length; j++) {
    sum += arr[j] - arr[j - K];
  }
  return Math.max(sum, total);
}

console.log(slidingWindow([-2, 3, 5, -4, 6, 7], 3)); //9
