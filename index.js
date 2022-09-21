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

// Chapter: 2 Program Structure
let result = 1;
let counter = 0;

while (result < 15) result *= 2;
console.log("result", result);

while (counter < 10) {
  counter += 1;
  result *= 2;
}
console.log("result", result);

do {
  var userName = "User1";
} while (!userName);
console.log(userName);

/* the 
  second 
  type
  of 
  comments
*/

// Task 1 Looping a triangle
let hashList = "#";
for (let hash = 1; hash <= 7; hash++) {
  // method 1
  // let hashLine = hashList.repeat(hash);
  // method 2
  console.log(hashList);
  hashList += "#";
}

// Task 2 FizzBuzz
for (let num = 1; num <= 100; num++) {
  const cond1 = num % 3 === 0;
  const cond2 = num % 5 === 0;

  if (cond1 && cond2) {
    console.log("Fizz Buzz");
  } else if (cond1) {
    console.log("Fizz");
  } else if (cond2) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
}

// Task 3 Chessboard
const boardLength = 8;
for (let chessLine = 0; chessLine < boardLength; chessLine++) {
  let board = "";
  const hash = "#";
  const space = " ";

  for (let size = 0; size < boardLength / 2; size++) {
    if (chessLine % 2 === 0) {
      board += hash + space;
    } else {
      board += space + hash;
    }
  }
  board += "\n";

  console.log(board);
}
