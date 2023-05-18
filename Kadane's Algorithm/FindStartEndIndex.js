//Find start and end index of max sub array using Kadana's Algorithm

function findStartEndIndex(arr = []) {
  let MAX = -Infinity;
  let sum = 0;
  let start = 0;
  let end = 0;
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    let result = arr[i] + sum;
    if (arr[i] > result) {
      sum = arr[i];
      temp = i;
    } else {
      sum = result;
    }
    if (sum > MAX) {
      MAX = sum;
      start = temp;
      end = i;
    }
  }
  return [start, end];
}

console.log(findStartEndIndex([-2, 4, -1, 6, -2, -1])); //[1,3]
