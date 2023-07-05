//The Knuth-Morris-Pratt (KMP)Algorithm
//http://www.btechsmartclass.com/data_structures/knuth-morris-pratt-algorithm.html

function lpsTable(pattern) {
  const lps = Array.from({ length: pattern.length }).fill(0);
  let i = 0;
  let j = 1;
  lps[0] = 0;
  while (j < pattern.length) {
    if (pattern.charAt(j) === pattern.charAt(i)) {
      i++;
      lps[j] = i;
      j++;
    } else {
      if (i !== 0) {
        i = lps[i - 1];
      } else {
        lps[j] = 0;
        j++;
      }
    }
  }
  return lps;
}

function patternSearch(sentence, pattern) {
  let M = pattern.length;
  let j = 0; //index for pattern[]
  let N = sentence.length;
  let i = 0; //index for sentence[]
  const lps = lpsTable(pattern);
  while (N - i >= M - j) {
    if (pattern.charAt(j) === sentence.charAt(i)) {
      i++;
      j++;
    }
    if (j == M) {
      console.log("Found pattern at", i - j);
      j = lps[j - 1];
    } else if (i < N && pattern.charAt(j) !== sentence.charAt(i)) {
      if (j !== 0) j = lps[j - 1];
      else i++;
    }
  }
}

const sentence = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
patternSearch(sentence, pattern);

/* 
Time Complexity: O(N+M) , N-->sentence length, M-->pattern length
Space Complexity: O(M)
*/
