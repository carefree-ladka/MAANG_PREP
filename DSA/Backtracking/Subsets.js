function subset(arr = []) {
  const result = [];
  subsethelper([], 0);
  function subsethelper(currentSubset = [], start) {
    result.push([...currentSubset]);
    for (let i = start; i < arr.length; i++) {
      currentSubset.push(arr[i]);
      subsethelper(currentSubset, i + 1);
      currentSubset.pop();
    }
  }
  return result;
}

console.log(subset([1, 2, 3]));
