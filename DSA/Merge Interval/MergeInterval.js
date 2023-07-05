//https://leetcode.com/problems/merge-intervals/description/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const mergedIntervals = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const prevInterval = mergedIntervals[mergedIntervals.length - 1];
    if (currentInterval[0] <= prevInterval[1]) {
      prevInterval[1] = Math.max(currentInterval[1], prevInterval[1]);
    } else {
      mergedIntervals.push(currentInterval);
    }
  }
  return mergedIntervals;
}

const interval1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

const interval2 = [
  [1, 4],
  [0, 4],
];
console.log(merge(interval1)); //[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
console.log(merge(interval2));

/* 
TC: O(NlogN + N)->O(NlogN)
SC: O(N)
*/
