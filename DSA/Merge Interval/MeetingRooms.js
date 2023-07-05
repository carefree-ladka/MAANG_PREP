//https://www.lintcode.com/problem/920/

/**
 * @param intervals: an array of meeting time intervals
 * @return: if a person could attend all meetings
 */
function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) return true;
  }
  return false;
}

const interval1 = [
  [0, 30],
  [5, 10],
  [15, 20],
];

const interval2 = [
  [5, 8],
  [9, 15],
];
console.log(canAttendMeetings(interval1)); //true
console.log(canAttendMeetings(interval2)); //false

/* 
  TC: O(NlogN + N)->O(NlogN)
  SC: O(N)
  */
