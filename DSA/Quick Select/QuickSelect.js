/* 
Author : Pawan Kumar
Date : 05/18/2023
*/
//Hoare's Partition
function partition(arr = [], left, right) {
  let i = left - 1;
  let j = right + 1;
  const P = arr[left]; //Pivot
  while (true) {
    do {
      i++;
    } while (arr[i] < P);
    do {
      j--;
    } while (arr[j] > P);
    if (i >= j) return j;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

//Find min or max element in unsorted array
function quickSelect(arr = [], K, left, right) {
  if (left === right) return arr[left];
  const pivotIdx = partition(arr, left, right);
  if (K === pivotIdx) return arr[pivotIdx];
  else if (K < pivotIdx)
    return quickSelect(arr, K, left, pivotIdx - 1); //left side array
  else return quickSelect(arr, K, pivotIdx + 1, right); //right side array
}

//Sort array
function quickSort(arr, left, right) {
  if (left < right) {
    const P = partition(arr, left, right);
    quickSort(arr, left, P);
    quickSort(arr, P + 1, right);
  }
  return arr;
}

function findKthSmallest(arr = [], K) {
  if (K > arr.length) return;
  return quickSelect(arr, K, 0, arr.length - 1);
}

function findKthMaximum(arr = [], K) {
  if (K > arr.length) return;
  let max = arr.length - K - 1;
  return quickSelect(arr, max, 0, arr.length - 1);
}

const arr = [7, 10, 4, 3, 20, 15];
const K = 0;
console.log(`${K}th smallest`, findKthSmallest(arr, K)); //3
console.log(`${K}th maximum`, findKthMaximum(arr, K)); //20
console.log(quickSort(arr, 0, arr.length - 1)); //[ 3, 4, 7, 10, 15, 20 ]
