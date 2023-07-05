function toBinary(number) {
  return number.toString(2);
}

function toD(number, type = 2) {
  return parseInt(String(number), type);
}
const x = 5;
const leftShift = x << 1;
const rightShift = x >> 1;

const number = 42;
const binary = toBinary(number);
console.log(binary); //101010
console.log(toDecimal(binary)); //42
console.log();