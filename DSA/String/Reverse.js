function trim(str = "") {
  let start = 0;
  let end = str.length - 1;

  while (start < str.length - 1 && str[start] === " ") start++;
  while (end >= 0 && str[end] === " ") end--;
  return str.substring(start, end + 1);
}

function reverseStr(str = "", sep = " ") {
  if (!str.length) return;
  let word = "";
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    if (char !== " ") {
      word = char + word;
    } else if (word) {
      revStr += word + sep;
      word = "";
    }
  }
  return trim(revStr);
}

const str = "  I love   Indian    food   ";

console.log(reverseStr(str)); //food Indian love I

console.log(trim(str));
