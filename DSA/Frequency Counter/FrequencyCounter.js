function frequencyCounter(arr = []) {
  const lookup = {};
  arr.forEach((item) => (lookup[item] ? lookup[item]++ : (lookup[item] = 1)));
  return lookup;
}

console.log(frequencyCounter([1, 2, 1, 3, 3, 4, 5])); //{ '1': 2, '2': 1, '3': 2, '4': 1, '5': 1 }

/* 
Time Complexity: O(N)
Space Complexity: O(N)\
*/
