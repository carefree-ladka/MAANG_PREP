/* 
 Two Pointers technique is being used to reverse a string
*/

function reverseString(str = "") {
  if (!str) return;
  let left = 0;
  let right = str.length - 1;
  const arr = str.split("");
  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

const sentence = "She is beautiful";
reverseString(sentence);
console.log(sentence);
