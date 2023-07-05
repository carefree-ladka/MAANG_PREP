import { MinHeap } from "../Max and Min Heap/MaxMinHeap";

//https://www.lintcode.com/problem/919

/**
 * @param intervals: an array of meeting time intervals
 * @return: the minimum number of conference rooms required
 */
function minMeetingRooms(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let rooms = 0;
  const minHeap = new MinHeap();
  for (let interval of intervals) {
    if (minHeap.heap.length > 0 && minHeap.heap[0] <= interval[0]) {
      minHeap.extractMin(); //rooms become available
    } else rooms++; //need more rooms
    minHeap.insert(interval[1]); ////add current  meeting end time
  }
  return rooms;
}

const interval1 = [
  [0, 30],
  [5, 10],
  [15, 20],
];
const interval2 = [[2, 7]];

console.log(minMeetingRooms(interval1)); //2
console.log(minMeetingRooms(interval2)); //1
