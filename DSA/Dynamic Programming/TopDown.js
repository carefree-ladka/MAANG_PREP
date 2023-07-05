function fact(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// console.log(fact(5)); //120

function memoizedFact(n = 5) {
  const lookup = {};
  if (n in lookup) return lookup[n];
  if (n === 0 || n === 1) return 1;
  lookup[n] = n * memoizedFact(n - 1);
  return lookup[n];
}

console.log(memoizedFact(5));
console.log(memoizedFact(5));
