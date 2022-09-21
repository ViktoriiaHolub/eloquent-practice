// chapter: 0 Introduction

// 1
const totalByBits =
  "00110001 00000000 00000000 00110001 00000001 00000001 00110011 00000001 00000010 01010001 00001011 00000010 00100010 00000010 00001000 01000011 00000001 00000000 01000001 00000001 00000001 00010000 00000010 00000000 01100010 00000000 00000000";

const resultFromBytes = parseInt(totalByBits, 2);
console.log(resultFromBytes); // 49

// 2
let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}

// total:55 = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
console.log(total); // 55

// chapter: 1 Values, Types, and Operators

// Number
const number505 = 505;
const bitsOfNumber = number505.toString(2);
console.log(bitsOfNumber); // '111111001'

// String
const letterA = "a";
const bitsOfLetter = letterA.charCodeAt(0).toString(2);
console.log(bitsOfLetter); // '1100001'

let textWithTwoRows = "This is the first line\nAnd this is the second";
console.log(textWithTwoRows);
// This is the first line
// And this is the second

let symbolForLineFeed = 'A newline character is written like "\\n".';
console.log(symbolForLineFeed);
// 'A newline character is written like "\n".';
